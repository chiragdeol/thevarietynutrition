//#region node_modules/.nitro/vite/services/ssr/assets/brand-DfYeJUSd.js
var BRAND = {
	name: "The Variety Nutrition",
	shortName: "TVN",
	tagline: "Pure. Natural. Nourishing.",
	email: "hello@thevarietynutrition.in",
	phone: "+91 98765 43210",
	whatsapp: "919876543210",
	instagram: {
		handle: "thevarietynutritionjind2026",
		url: "https://www.instagram.com/thevarietynutritionjind2026/",
		reels: [
			{ url: "https://www.instagram.com/reel/DXbhBqXCEh6/" },
			{ url: "https://www.instagram.com/reel/DXD0NoAExG9/" },
			{ url: "https://www.instagram.com/reel/DYZjegdzX9y/" }
		]
	}
};
function whatsappUrl(message) {
	return `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(message)}`;
}
//#endregion
export { whatsappUrl as n, BRAND as t };
