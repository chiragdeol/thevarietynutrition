// Brand configuration — edit these to update site-wide
export type InstagramItem = {
  // Instagram reel/post permalink — the ONLY required field.
  // Instagram's embed.js renders the real reel (video, likes, caption, profile).
  url: string;
  // Optional fallbacks used only if embed.js is blocked (ad-blockers etc.)
  poster?: string;
  caption?: string;
};

export const BRAND = {
  name: "The Variety Nutrition",
  shortName: "TVN",
  tagline: "Pure. Natural. Nourishing.",
  email: "hello@thevarietynutrition.in",
  phone: "+91 98765 43210",
  // WhatsApp number in international format WITHOUT '+' or spaces (for wa.me)
  whatsapp: "919876543210",
  instagram: {
    handle: "thevarietynutritionjind2026",
    url: "https://www.instagram.com/thevarietynutritionjind2026/",
    // Paste real reel / post permalinks from @thevarietynutritionjind2026 below.
    // Any public instagram.com/reel/... or /p/... URL works.
    reels: [
      { url: "https://www.instagram.com/reel/DXbhBqXCEh6/" },
      { url: "https://www.instagram.com/reel/DXD0NoAExG9/" },
      { url: "https://www.instagram.com/reel/DYZjegdzX9y/" },
    ] as InstagramItem[],
  },
} as const;

export function whatsappUrl(message: string) {
  return `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(message)}`;
}
