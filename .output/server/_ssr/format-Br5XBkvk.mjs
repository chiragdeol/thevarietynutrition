//#region node_modules/.nitro/vite/services/ssr/assets/format-Br5XBkvk.js
var formatINR = (cents) => new Intl.NumberFormat("en-IN", {
	style: "currency",
	currency: "INR",
	maximumFractionDigits: 0
}).format(cents / 100);
//#endregion
export { formatINR as t };
