-- SEED CATEGORIES
INSERT INTO public.categories (id, slug, name, description, image_url, sort_order) VALUES
('c51121d5-d050-4d56-a4c3-2b2df6613c01', 'almonds', 'Almonds', 'Premium quality almonds sourced from the best orchards.', '/images/cat-almonds.jpg', 1),
('c51121d5-d050-4d56-a4c3-2b2df6613c02', 'cashews', 'Cashews', 'Creamy, rich and hand-picked premium cashews.', '/images/cat-cashews.jpg', 2),
('c51121d5-d050-4d56-a4c3-2b2df6613c03', 'dates', 'Dates', 'Naturally sweet, energy-rich premium dates.', '/images/cat-dates.jpg', 3),
('c51121d5-d050-4d56-a4c3-2b2df6613c04', 'dried-fruits', 'Dried Fruits', 'Deliciously dried fruits packed at the peak of freshness.', '/images/cat-driedfruits.jpg', 4),
('c51121d5-d050-4d56-a4c3-2b2df6613c05', 'pistachios', 'Pistachios', 'Crunchy, salted and roasted premium pistachios.', '/images/cat-pistachios.jpg', 5),
('c51121d5-d050-4d56-a4c3-2b2df6613c06', 'seeds', 'Seeds & Herbs', 'Healthy nutritional seeds and traditional Ayurvedic herbs.', '/images/cat-seeds.jpg', 6),
('c51121d5-d050-4d56-a4c3-2b2df6613c07', 'walnuts', 'Walnuts', 'Rich in Omega-3 premium brain-healthy walnuts.', '/images/cat-walnuts.jpg', 7)
ON CONFLICT (slug) DO UPDATE SET 
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  sort_order = EXCLUDED.sort_order;

-- SEED PRODUCTS
INSERT INTO public.products (id, slug, name, short_description, description, category_id, price_cents, compare_at_price_cents, weight_grams, image_url, stock, featured, active) VALUES
-- Almonds
('a0000000-0000-0000-0000-000000000001', 'mamra-almond-signature', 'Mamra Almonds (Signature)', 'Premium quality signature Mamra almonds.', 'Our signature Mamra almonds are crisp, nutrient-dense, and loaded with essential oils. Perfect for daily consumption, making almond milk, or badam ragda.', 'c51121d5-d050-4d56-a4c3-2b2df6613c01', 120000, 145000, 500, '/__l5e/assets-v1/d53e1ad3-fb99-4508-986e-cc660a6b16aa/tvn-mamra-almond-signature.png', 50, true, true),
('a0000000-0000-0000-0000-000000000002', 'mamra-almond-red', 'Mamra Almonds (Red)', 'Traditional red Mamra almonds loaded with healthy fats.', 'Carefully sorted premium red Mamra almonds. High in protein, fiber, and healthy monounsaturated fats.', 'c51121d5-d050-4d56-a4c3-2b2df6613c01', 95000, 110000, 500, '/__l5e/assets-v1/fdfb9e4c-0abe-49dc-ab41-b5e3df1a7c57/tvn-mamra-almond-red.png', 75, false, true),

-- Pistachios
('a0000000-0000-0000-0000-000000000003', 'pista-roasted', 'Roasted Pistachios (Salted)', 'Premium roasted & lightly salted pistachios in shell.', 'Lightly salted and roasted to perfection. Our premium pistachios make a delicious and healthy snack.', 'c51121d5-d050-4d56-a4c3-2b2df6613c05', 45000, 55000, 250, '/__l5e/assets-v1/b7ee4c7a-771b-400d-8819-d5b8a0cf65a2/tvn-pista-roasted.png', 100, true, true),

-- Dried Fruits
('a0000000-0000-0000-0000-000000000004', 'kissmis-premium', 'Premium Kismis (Raisins)', 'Plump, sweet and juicy premium green raisins.', 'Naturally sun-dried premium raisins. Sweet, juicy, and perfect for baking, desserts, or direct snacking.', 'c51121d5-d050-4d56-a4c3-2b2df6613c04', 25000, 32000, 250, '/__l5e/assets-v1/8cd5d0b2-308b-4b94-a2df-f1255f4fa820/tvn-kissmis-premium.png', 120, true, true),

-- Seeds & Herbs
('a0000000-0000-0000-0000-000000000005', 'chia-seeds', 'Premium Chia Seeds', 'Fiber-rich organic chia seeds for smoothies and puddings.', 'High in omega-3 fatty acids, fiber, and protein. Perfect for healthy breakfast bowls and weight management.', 'c51121d5-d050-4d56-a4c3-2b2df6613c06', 18000, 24000, 200, '/__l5e/assets-v1/580dbe48-2e45-4a44-a8d1-8f9abceafe0d/tvn-chia-seeds.png', 200, true, true),
('a0000000-0000-0000-0000-000000000006', 'flax-seeds', 'Premium Flax Seeds', 'Rich in Omega-3 and lignans premium flax seeds.', 'Lightly toasted flax seeds, loaded with nutritional benefits. Great for heart health and digestion.', 'c51121d5-d050-4d56-a4c3-2b2df6613c06', 15000, 19000, 200, '/__l5e/assets-v1/5d722b9c-e310-4449-aad8-9428665d5a3e/tvn-flax-seeds.png', 150, false, true),
('a0000000-0000-0000-0000-000000000007', 'pumpkin-seeds', 'Raw Pumpkin Seeds', 'AAA-grade shell-free raw pumpkin seeds.', 'Excellent source of zinc, magnesium, and plant-based protein. Ideal for daily snacking or adding to salads.', 'c51121d5-d050-4d56-a4c3-2b2df6613c06', 22000, 29000, 200, '/__l5e/assets-v1/087e4571-6e1c-4f1b-800f-c9261c337b52/tvn-pumpkin-seeds.png', 180, true, true),
('a0000000-0000-0000-0000-000000000008', 'sunflower-seeds', 'Premium Sunflower Seeds', 'Raw, hulled sunflower seed kernels.', 'Nutrient-rich sunflower seeds containing vitamin E and antioxidants. Makes a crunchy addition to oatmeal.', 'c51121d5-d050-4d56-a4c3-2b2df6613c06', 17000, 22000, 200, '/__l5e/assets-v1/ed25c7ca-fd17-4c97-ac8e-6b241c340222/tvn-sunflower-seeds.png', 150, false, true),
('a0000000-0000-0000-0000-000000000009', 'roasted-chana-premium', 'Premium Roasted Chana', 'Crisp, roasted gram without skin.', 'High-protein, low-fat roasted chana. The ultimate healthy roasted snack for weight watchers.', 'c51121d5-d050-4d56-a4c3-2b2df6613c06', 12000, 15000, 250, '/__l5e/assets-v1/0d675301-a9ec-4613-88eb-eb58f679c2ef/tvn-roasted-chana-premium.png', 100, false, true),
('a0000000-0000-0000-0000-000000000010', 'sprouts-mix', 'Sprouts Seed Mix', 'A healthy mix of seeds for sprouting.', 'Nutritional blend designed for easy sprouting at home. High in live enzymes, fiber, and vitamins.', 'c51121d5-d050-4d56-a4c3-2b2df6613c06', 16000, 20000, 200, '/__l5e/assets-v1/c2dfd20c-a38c-48a8-9548-96c4bcdb1463/tvn-sprouts-mix.png', 80, false, true),

-- Herbs
('a0000000-0000-0000-0000-000000000011', 'hadjod', 'Hadjod Powder (Bone Setter)', 'Traditional Ayurvedic herb for bone and joint health.', '100% pure Hadjod (Cissus quadrangularis) powder. Known traditionally to accelerate bone healing and support joint strength.', 'c51121d5-d050-4d56-a4c3-2b2df6613c06', 29000, 39000, 100, '/__l5e/assets-v1/e4be70e1-5823-466d-bd5b-911803a422fa/tvn-hadjod.png', 60, true, true),
('a0000000-0000-0000-0000-000000000012', 'arjun-chaal', 'Arjun Chaal Powder', 'Traditional herb for cardiovascular support.', 'Pure Arjuna bark powder, renowned in Ayurveda for maintaining heart health, regulating blood pressure, and boosting stamina.', 'c51121d5-d050-4d56-a4c3-2b2df6613c06', 24000, 32000, 100, '/__l5e/assets-v1/1ad3cd3d-b200-43a7-939c-eefd201e179c/tvn-arjun-chaal.png', 90, false, true),
('a0000000-0000-0000-0000-000000000013', 'kali-musli', 'Kali Musli Powder', 'Natural strength and vitality booster.', 'Premium quality Kali Musli (Curculigo orchioides) root powder. Used in Ayurveda for energy, vigor, and physical endurance.', 'c51121d5-d050-4d56-a4c3-2b2df6613c06', 35000, 48000, 100, '/__l5e/assets-v1/f701ef41-3867-44a4-81fe-9cea0e620cdc/tvn-kali-musli.png', 50, false, true),
('a0000000-0000-0000-0000-000000000014', 'satawari', 'Shatavari Powder', 'Ayurvedic wellness herb for vitality.', '100% natural Shatavari root powder. Traditionally used as a general tonic for energy, hormonal balance, and vitality.', 'c51121d5-d050-4d56-a4c3-2b2df6613c06', 38000, 49000, 100, '/__l5e/assets-v1/e9bf7151-9038-4b4f-9340-cfc9818ad9a3/tvn-satawari.png', 70, true, true)
ON CONFLICT (slug) DO UPDATE SET 
  name = EXCLUDED.name,
  short_description = EXCLUDED.short_description,
  description = EXCLUDED.description,
  category_id = EXCLUDED.category_id,
  price_cents = EXCLUDED.price_cents,
  compare_at_price_cents = EXCLUDED.compare_at_price_cents,
  weight_grams = EXCLUDED.weight_grams,
  image_url = EXCLUDED.image_url,
  stock = EXCLUDED.stock,
  featured = EXCLUDED.featured,
  active = EXCLUDED.active;
