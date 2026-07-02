
-- ROLES
create type public.app_role as enum ('admin', 'customer');

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  role app_role not null default 'customer',
  created_at timestamptz not null default now(),
  unique (user_id, role)
);
grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;
alter table public.user_roles enable row level security;

create or replace function public.has_role(_user_id uuid, _role app_role)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.user_roles where user_id = _user_id and role = _role)
$$;

create policy "Users read own roles" on public.user_roles for select to authenticated
  using (auth.uid() = user_id or public.has_role(auth.uid(),'admin'));

-- PROFILES
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  phone text,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
grant select, insert, update on public.profiles to authenticated;
grant all on public.profiles to service_role;
alter table public.profiles enable row level security;
create policy "Users view own profile" on public.profiles for select to authenticated using (auth.uid() = id);
create policy "Users update own profile" on public.profiles for update to authenticated using (auth.uid() = id);
create policy "Users insert own profile" on public.profiles for insert to authenticated with check (auth.uid() = id);

create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name', ''));
  insert into public.user_roles (user_id, role) values (new.id, 'customer') on conflict do nothing;
  return new;
end; $$;
create trigger on_auth_user_created after insert on auth.users
  for each row execute function public.handle_new_user();

-- utility trigger
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$ begin new.updated_at = now(); return new; end; $$;

-- CATEGORIES
create table public.categories (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  description text,
  image_url text,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);
grant select on public.categories to anon, authenticated;
grant all on public.categories to authenticated, service_role;
alter table public.categories enable row level security;
create policy "Anyone reads categories" on public.categories for select to anon, authenticated using (true);
create policy "Admins manage categories" on public.categories for all to authenticated
  using (public.has_role(auth.uid(),'admin')) with check (public.has_role(auth.uid(),'admin'));

-- PRODUCTS
create table public.products (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  description text,
  short_description text,
  category_id uuid references public.categories(id) on delete set null,
  price_cents int not null check (price_cents >= 0),
  compare_at_price_cents int,
  weight_grams int,
  image_url text,
  images jsonb not null default '[]'::jsonb,
  stock int not null default 0,
  featured boolean not null default false,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index on public.products (category_id);
create index on public.products (featured) where featured = true;
grant select on public.products to anon, authenticated;
grant all on public.products to authenticated, service_role;
alter table public.products enable row level security;
create policy "Anyone reads active products" on public.products for select to anon, authenticated
  using (active = true or public.has_role(auth.uid(),'admin'));
create policy "Admins manage products" on public.products for all to authenticated
  using (public.has_role(auth.uid(),'admin')) with check (public.has_role(auth.uid(),'admin'));
create trigger products_set_updated before update on public.products
  for each row execute function public.set_updated_at();

-- CART ITEMS
create table public.cart_items (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  product_id uuid not null references public.products(id) on delete cascade,
  quantity int not null default 1 check (quantity > 0),
  created_at timestamptz not null default now(),
  unique (user_id, product_id)
);
grant select, insert, update, delete on public.cart_items to authenticated;
grant all on public.cart_items to service_role;
alter table public.cart_items enable row level security;
create policy "Users manage own cart" on public.cart_items for all to authenticated
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- ORDERS
create type public.order_status as enum ('pending','paid','shipped','delivered','cancelled');

create table public.orders (
  id uuid primary key default gen_random_uuid(),
  order_number text unique not null default ('NJ-' || upper(substr(replace(gen_random_uuid()::text,'-',''),1,8))),
  user_id uuid references auth.users(id) on delete set null,
  status order_status not null default 'pending',
  subtotal_cents int not null,
  shipping_cents int not null default 0,
  total_cents int not null,
  customer_name text not null,
  customer_email text not null,
  customer_phone text,
  shipping_address text not null,
  shipping_city text not null,
  shipping_state text,
  shipping_zip text not null,
  shipping_country text not null default 'India',
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index on public.orders (user_id);
grant select, insert, update on public.orders to authenticated;
grant all on public.orders to service_role;
alter table public.orders enable row level security;
create policy "Users view own orders" on public.orders for select to authenticated
  using (auth.uid() = user_id or public.has_role(auth.uid(),'admin'));
create policy "Users create own orders" on public.orders for insert to authenticated
  with check (auth.uid() = user_id);
create policy "Admins update orders" on public.orders for update to authenticated
  using (public.has_role(auth.uid(),'admin'));
create trigger orders_set_updated before update on public.orders
  for each row execute function public.set_updated_at();

create table public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  product_id uuid references public.products(id) on delete set null,
  product_name text not null,
  product_image text,
  unit_price_cents int not null,
  quantity int not null,
  line_total_cents int not null
);
create index on public.order_items (order_id);
grant select, insert on public.order_items to authenticated;
grant all on public.order_items to service_role;
alter table public.order_items enable row level security;
create policy "Users view own order items" on public.order_items for select to authenticated
  using (exists (select 1 from public.orders o where o.id = order_id
    and (o.user_id = auth.uid() or public.has_role(auth.uid(),'admin'))));
create policy "Users insert own order items" on public.order_items for insert to authenticated
  with check (exists (select 1 from public.orders o where o.id = order_id and o.user_id = auth.uid()));

-- BLOG POSTS (recipes)
create table public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  excerpt text,
  content text not null,
  cover_image text,
  author_name text,
  published boolean not null default true,
  published_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
grant select on public.blog_posts to anon, authenticated;
grant all on public.blog_posts to authenticated, service_role;
alter table public.blog_posts enable row level security;
create policy "Anyone reads published posts" on public.blog_posts for select to anon, authenticated
  using (published = true or public.has_role(auth.uid(),'admin'));
create policy "Admins manage posts" on public.blog_posts for all to authenticated
  using (public.has_role(auth.uid(),'admin')) with check (public.has_role(auth.uid(),'admin'));
create trigger posts_set_updated before update on public.blog_posts
  for each row execute function public.set_updated_at();
