import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Toaster } from "sonner";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { CartProvider } from "@/lib/cart";
import { WishlistProvider } from "@/lib/wishlist";
import { AuthProvider } from "@/lib/auth";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PromoPopup } from "@/components/PromoPopup";
import { WhatsAppFAB } from "@/components/WhatsAppButton";

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-serif font-semibold">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">Please try refreshing or head home.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground">Try again</button>
          <a href="/" className="rounded-md border border-input bg-background px-4 py-2 text-sm">Go home</a>
        </div>
      </div>
    </div>
  );
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-serif font-bold">404</h1>
        <p className="mt-3 text-muted-foreground">This page has wandered off.</p>
        <a href="/" className="mt-6 inline-block rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground">Back home</a>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "The Variety Nutrition — Premium Dry Fruits, Nuts, Seeds & Ayurvedic Herbs in India" },
      { name: "description", content: "Shop TVN premium almonds, cashews, pistachios, seeds, kismis & Ayurvedic herbs. 100% natural, farm-fresh, delivered across India. Personalised diet plans available." },
      { name: "keywords", content: "dry fruits online India, premium almonds, pistachio, kismis, chia seeds, flax seeds, ayurvedic herbs, shatavari, hadjod, healthy snacks, TVN, The Variety Nutrition" },
      { name: "author", content: "The Variety Nutrition" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "theme-color", content: "#3d2817" },
      { name: "format-detection", content: "telephone=no" },
      { property: "og:site_name", content: "The Variety Nutrition" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@thevarietynutritionjind2026" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/__l5e/assets-v1/a083104b-4bb3-4afd-8dbd-e8e303b136d5/tvn-logo.png" },
      { rel: "apple-touch-icon", href: "/__l5e/assets-v1/a083104b-4bb3-4afd-8dbd-e8e303b136d5/tvn-logo.png" },
      { rel: "preconnect", href: "https://kzaoxtgonkvrjhfkwedy.supabase.co" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "#organization",
              name: "The Variety Nutrition",
              alternateName: "TVN",
              url: "/",
              logo: "/__l5e/assets-v1/a083104b-4bb3-4afd-8dbd-e8e303b136d5/tvn-logo.png",
              sameAs: ["https://www.instagram.com/thevarietynutritionjind2026/"],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-98765-43210",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi"],
              },
            },
            {
              "@type": "WebSite",
              "@id": "#website",
              url: "/",
              name: "The Variety Nutrition",
              publisher: { "@id": "#organization" },
              potentialAction: {
                "@type": "SearchAction",
                target: "/products?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">
                <Outlet />
              </main>
              <Footer />
            </div>
            <PromoPopup />
            <WhatsAppFAB />
            <Toaster position="top-center" richColors />
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
