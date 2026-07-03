globalThis.__nitro_main__ = import.meta.url;
import { a as toEventHandler, c as NodeResponse, i as defineLazyEventHandler, l as serve, n as HTTPError, r as defineHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"af-JLLBfs78JgDQrVZNte4ujBLCuds\"",
		"mtime": "2026-07-02T08:34:20.168Z",
		"size": 175,
		"path": "../public/robots.txt"
	},
	"/images/blog-oats.jpg": {
		"type": "image/jpeg",
		"etag": "\"1aaf2-fUsEpK2a1pWzA+I8xDaaq5icGx0\"",
		"mtime": "2026-07-02T08:34:20.189Z",
		"size": 109298,
		"path": "../public/images/blog-oats.jpg"
	},
	"/images/cat-driedfruits.jpg": {
		"type": "image/jpeg",
		"etag": "\"11d52-TZR1bIq2IMn7Pp4u7axnxEu6NWU\"",
		"mtime": "2026-07-02T08:34:20.224Z",
		"size": 73042,
		"path": "../public/images/cat-driedfruits.jpg"
	},
	"/images/cat-cashews.jpg": {
		"type": "image/jpeg",
		"etag": "\"16aaf-0ZMdITp/z92mIlQYeVQojlMR3ec\"",
		"mtime": "2026-07-02T08:34:20.206Z",
		"size": 92847,
		"path": "../public/images/cat-cashews.jpg"
	},
	"/images/cat-dates.jpg": {
		"type": "image/jpeg",
		"etag": "\"11f17-uuooQDaHLFDlDpUIvI+JLOS42fY\"",
		"mtime": "2026-07-02T08:34:20.214Z",
		"size": 73495,
		"path": "../public/images/cat-dates.jpg"
	},
	"/images/cat-pistachios.jpg": {
		"type": "image/jpeg",
		"etag": "\"ea9c-pEt1n887wHwV90DMoCYIiLFoyPo\"",
		"mtime": "2026-07-02T08:34:20.233Z",
		"size": 60060,
		"path": "../public/images/cat-pistachios.jpg"
	},
	"/images/blog-energy-balls.jpg": {
		"type": "image/jpeg",
		"etag": "\"20628-pe55iz498KmfC/tlmNdU/QK3Ibc\"",
		"mtime": "2026-07-02T08:34:20.181Z",
		"size": 132648,
		"path": "../public/images/blog-energy-balls.jpg"
	},
	"/images/cat-walnuts.jpg": {
		"type": "image/jpeg",
		"etag": "\"dbe0-rqMNtMg0rE1icF+PQRGBcfkZLTQ\"",
		"mtime": "2026-07-02T08:34:20.248Z",
		"size": 56288,
		"path": "../public/images/cat-walnuts.jpg"
	},
	"/assets/about-Bp5rjMJ0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"65c-HZfD81vT8bZPrun73rVdWSjnM90\"",
		"mtime": "2026-07-03T06:39:50.690Z",
		"size": 1628,
		"path": "../public/assets/about-Bp5rjMJ0.js"
	},
	"/images/cat-seeds.jpg": {
		"type": "image/jpeg",
		"etag": "\"1aae8-PjZYu8CKQziMmte9V3uJZXFa7sk\"",
		"mtime": "2026-07-02T08:34:20.240Z",
		"size": 109288,
		"path": "../public/images/cat-seeds.jpg"
	},
	"/assets/account-VNAFraAR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"823-cjh7Sfnxoa4iQVNB8WEsp2mBf2o\"",
		"mtime": "2026-07-03T06:39:50.691Z",
		"size": 2083,
		"path": "../public/assets/account-VNAFraAR.js"
	},
	"/assets/admin-gate.functions-DvQd6QEW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e0b-DVMYOGCOO9xkLdSFJRGTiGOP/VI\"",
		"mtime": "2026-07-03T06:39:50.691Z",
		"size": 7691,
		"path": "../public/assets/admin-gate.functions-DvQd6QEW.js"
	},
	"/assets/admin-login-q8LuyRPm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8f1-8+m/HYQF0TmEq8qpGQIe59eTXtU\"",
		"mtime": "2026-07-03T06:39:50.692Z",
		"size": 2289,
		"path": "../public/assets/admin-login-q8LuyRPm.js"
	},
	"/assets/auth-CQ3hrob0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"244d-7bzu3IaPLfDh4RdI0VMSznjR6gE\"",
		"mtime": "2026-07-03T06:39:50.694Z",
		"size": 9293,
		"path": "../public/assets/auth-CQ3hrob0.js"
	},
	"/assets/cart-D3dRJ5dX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"20f2-6ecxMQcDjuGMyK4FC4tx3228cTM\"",
		"mtime": "2026-07-03T06:39:50.694Z",
		"size": 8434,
		"path": "../public/assets/cart-D3dRJ5dX.js"
	},
	"/assets/category._slug-COXm30cE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"39d-+srByS84sthCIPg3EBBkAbSVyXA\"",
		"mtime": "2026-07-03T06:39:50.696Z",
		"size": 925,
		"path": "../public/assets/category._slug-COXm30cE.js"
	},
	"/images/cat-almonds.jpg": {
		"type": "image/jpeg",
		"etag": "\"1160d-1Lnw4xll5K2yxMIUPHSZ2b9QpoY\"",
		"mtime": "2026-07-02T08:34:20.199Z",
		"size": 71181,
		"path": "../public/images/cat-almonds.jpg"
	},
	"/assets/admin-mOzDtQJW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1bc20-8M3Ji+SdBNZtgeBse0N/m+UvsCs\"",
		"mtime": "2026-07-03T06:39:50.692Z",
		"size": 113696,
		"path": "../public/assets/admin-mOzDtQJW.js"
	},
	"/assets/ClientOnly-DSdhhBBT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4a69-WyrxZtLqUfq4LPXTDSB800hvpRE\"",
		"mtime": "2026-07-03T06:39:50.686Z",
		"size": 19049,
		"path": "../public/assets/ClientOnly-DSdhhBBT.js"
	},
	"/assets/checkout-B7TWMlin.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"16a4-xHBu8AJ2rslcGMBGUryzUl+qD0c\"",
		"mtime": "2026-07-03T06:39:50.696Z",
		"size": 5796,
		"path": "../public/assets/checkout-B7TWMlin.js"
	},
	"/assets/diet-plan-cunULRVc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11c9-nIjc9cCdHcv0Xn8suAa8ehvBkPc\"",
		"mtime": "2026-07-03T06:39:50.698Z",
		"size": 4553,
		"path": "../public/assets/diet-plan-cunULRVc.js"
	},
	"/images/hero-nuts.jpg": {
		"type": "image/jpeg",
		"etag": "\"6fdb4-GAmf4CvbZue+aKLJxUxGdKnOMpk\"",
		"mtime": "2026-07-02T08:34:20.259Z",
		"size": 458164,
		"path": "../public/images/hero-nuts.jpg"
	},
	"/assets/contact-FkHr_9qF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"803-P0wEBWNIhm2mmdkyuBi93rzSM2s\"",
		"mtime": "2026-07-03T06:39:50.698Z",
		"size": 2051,
		"path": "../public/assets/contact-FkHr_9qF.js"
	},
	"/assets/dist-BFm3uqaI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"276-RoGx2T5mUTlwPlgIdt5LQvgRt6E\"",
		"mtime": "2026-07-03T06:39:50.699Z",
		"size": 630,
		"path": "../public/assets/dist-BFm3uqaI.js"
	},
	"/assets/dist-CCnp_w0I.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1845-j8WuQUA8Sbn75ZszZ1kkynfri0w\"",
		"mtime": "2026-07-03T06:39:50.699Z",
		"size": 6213,
		"path": "../public/assets/dist-CCnp_w0I.js"
	},
	"/assets/input-y3wReO_a.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"289-Ftzvs4bu3DDdPCXVfJK9Dt3ziS4\"",
		"mtime": "2026-07-03T06:39:50.701Z",
		"size": 649,
		"path": "../public/assets/input-y3wReO_a.js"
	},
	"/assets/format-E5Vv_E-p.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7f-zxOSwp5R+mO6vM5x62lnPAUARt0\"",
		"mtime": "2026-07-03T06:39:50.701Z",
		"size": 127,
		"path": "../public/assets/format-E5Vv_E-p.js"
	},
	"/assets/jsx-runtime-DGeXAQPT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3ab-mgnSm9dUpwL2+z7tKxJ2MsN0fOM\"",
		"mtime": "2026-07-03T06:39:50.703Z",
		"size": 939,
		"path": "../public/assets/jsx-runtime-DGeXAQPT.js"
	},
	"/assets/label-CBAOTjJP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"28d-WaBS7XXIV9nAT6zhQgG3RpBsluw\"",
		"mtime": "2026-07-03T06:39:50.703Z",
		"size": 653,
		"path": "../public/assets/label-CBAOTjJP.js"
	},
	"/assets/leaf-D3CmmqSV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fe-Rwk8ONx/TQ57aIU8xq6yD24WaF8\"",
		"mtime": "2026-07-03T06:39:50.705Z",
		"size": 254,
		"path": "../public/assets/leaf-D3CmmqSV.js"
	},
	"/assets/link-DbAi-u-e.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1168-r6U2cRGIEFPBf5KqRDj2zstM1ts\"",
		"mtime": "2026-07-03T06:39:50.705Z",
		"size": 4456,
		"path": "../public/assets/link-DbAi-u-e.js"
	},
	"/assets/matchContext-CB1h8nGv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"aa-idte0MmwM68yYuOTzjHGv/P6fak\"",
		"mtime": "2026-07-03T06:39:50.706Z",
		"size": 170,
		"path": "../public/assets/matchContext-CB1h8nGv.js"
	},
	"/assets/order._id-DWeDCC-9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a12-8R3OZAyTswuMnmRq6TO+Ptpl9AU\"",
		"mtime": "2026-07-03T06:39:50.707Z",
		"size": 6674,
		"path": "../public/assets/order._id-DWeDCC-9.js"
	},
	"/assets/phone-CBJMMDGD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d7-B9Lt4Y1i3plQhvyzg0wb6C00mt4\"",
		"mtime": "2026-07-03T06:39:50.707Z",
		"size": 471,
		"path": "../public/assets/phone-CBJMMDGD.js"
	},
	"/assets/plus-DKrhO6c3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ce-eAvNsqdNb5m0/6dgVNZhvWcJVEU\"",
		"mtime": "2026-07-03T06:39:50.709Z",
		"size": 206,
		"path": "../public/assets/plus-DKrhO6c3.js"
	},
	"/assets/poppins-devanagari-300-normal-D7nrgzLr.woff2": {
		"type": "font/woff2",
		"etag": "\"99f4-WNrgXa27E9CkL/p6OkUVoYZR4SE\"",
		"mtime": "2026-07-03T06:39:50.732Z",
		"size": 39412,
		"path": "../public/assets/poppins-devanagari-300-normal-D7nrgzLr.woff2"
	},
	"/assets/poppins-devanagari-300-normal-5EpgE5P1.woff": {
		"type": "font/woff",
		"etag": "\"ceac-lJYRKNlL7XxeaXqSM6tN+eWxfOE\"",
		"mtime": "2026-07-03T06:39:50.730Z",
		"size": 52908,
		"path": "../public/assets/poppins-devanagari-300-normal-5EpgE5P1.woff"
	},
	"/assets/poppins-devanagari-400-normal-CJDn6rn8.woff2": {
		"type": "font/woff2",
		"etag": "\"9aec-+heN9EaOhnzMHYotWFtIR1rPUqo\"",
		"mtime": "2026-07-03T06:39:50.734Z",
		"size": 39660,
		"path": "../public/assets/poppins-devanagari-400-normal-CJDn6rn8.woff2"
	},
	"/assets/poppins-devanagari-400-normal-CqVvlrh5.woff": {
		"type": "font/woff",
		"etag": "\"cef4-Q9BUPWHGyYmYg0WAnAKuATennh4\"",
		"mtime": "2026-07-03T06:39:50.735Z",
		"size": 52980,
		"path": "../public/assets/poppins-devanagari-400-normal-CqVvlrh5.woff"
	},
	"/assets/poppins-devanagari-500-normal-BIdkeU1p.woff2": {
		"type": "font/woff2",
		"etag": "\"98ac-FfduLsaYHzsmK+dTRQej4D+0kzM\"",
		"mtime": "2026-07-03T06:39:50.736Z",
		"size": 39084,
		"path": "../public/assets/poppins-devanagari-500-normal-BIdkeU1p.woff2"
	},
	"/assets/poppins-devanagari-500-normal-DMPDjHtT.woff": {
		"type": "font/woff",
		"etag": "\"ccc8-8jDg1gtG4+0okzl7ZW1O9UKGG0E\"",
		"mtime": "2026-07-03T06:39:50.737Z",
		"size": 52424,
		"path": "../public/assets/poppins-devanagari-500-normal-DMPDjHtT.woff"
	},
	"/assets/poppins-devanagari-600-normal-STEjXBNN.woff2": {
		"type": "font/woff2",
		"etag": "\"997c-qGf4mE9ZWpp57X22lffBTB3znms\"",
		"mtime": "2026-07-03T06:39:50.741Z",
		"size": 39292,
		"path": "../public/assets/poppins-devanagari-600-normal-STEjXBNN.woff2"
	},
	"/assets/poppins-devanagari-600-normal-ClASKHrr.woff": {
		"type": "font/woff",
		"etag": "\"cd50-tNlIea6o6ZDqycdJUZrDXE8b5cs\"",
		"mtime": "2026-07-03T06:39:50.739Z",
		"size": 52560,
		"path": "../public/assets/poppins-devanagari-600-normal-ClASKHrr.woff"
	},
	"/assets/poppins-devanagari-700-normal-fHs-vx92.woff": {
		"type": "font/woff",
		"etag": "\"cc18-RLulCJGQZRS7d5P8G7JyjBNCtlQ\"",
		"mtime": "2026-07-03T06:39:50.744Z",
		"size": 52248,
		"path": "../public/assets/poppins-devanagari-700-normal-fHs-vx92.woff"
	},
	"/assets/poppins-devanagari-700-normal-O-jipLrW.woff2": {
		"type": "font/woff2",
		"etag": "\"9954-YmyFpGMZyKQZKjnfAlsNz3JPyWo\"",
		"mtime": "2026-07-03T06:39:50.743Z",
		"size": 39252,
		"path": "../public/assets/poppins-devanagari-700-normal-O-jipLrW.woff2"
	},
	"/assets/poppins-latin-300-normal-DCNuMXUj.woff": {
		"type": "font/woff",
		"etag": "\"2900-cgy8/f2gng3NR1KmQL9rti00yds\"",
		"mtime": "2026-07-03T06:39:50.747Z",
		"size": 10496,
		"path": "../public/assets/poppins-latin-300-normal-DCNuMXUj.woff"
	},
	"/assets/index-CcPaMgFh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"963db-RlHi9wrZf/uJdupbpmT7f3p9Nbk\"",
		"mtime": "2026-07-03T06:39:50.686Z",
		"size": 615387,
		"path": "../public/assets/index-CcPaMgFh.js"
	},
	"/assets/poppins-latin-300-normal-Dku2WoCh.woff2": {
		"type": "font/woff2",
		"etag": "\"1ea0-qem6/mRmb0WVBRoOiVtHpfo55n4\"",
		"mtime": "2026-07-03T06:39:50.748Z",
		"size": 7840,
		"path": "../public/assets/poppins-latin-300-normal-Dku2WoCh.woff2"
	},
	"/assets/poppins-latin-400-normal-cpxAROuN.woff2": {
		"type": "font/woff2",
		"etag": "\"1ecc-rG1xtNX90rPavJoG/2wAHkJR2gs\"",
		"mtime": "2026-07-03T06:39:50.750Z",
		"size": 7884,
		"path": "../public/assets/poppins-latin-400-normal-cpxAROuN.woff2"
	},
	"/assets/poppins-latin-400-normal-BOb3E3N0.woff": {
		"type": "font/woff",
		"etag": "\"2924-luPBchCxifQ/9oXwK0z0nCIDoMs\"",
		"mtime": "2026-07-03T06:39:50.749Z",
		"size": 10532,
		"path": "../public/assets/poppins-latin-400-normal-BOb3E3N0.woff"
	},
	"/assets/poppins-latin-500-normal-C8OXljZJ.woff2": {
		"type": "font/woff2",
		"etag": "\"1e44-DaLRfnOPRtKgnm+3lp2kUXGamCA\"",
		"mtime": "2026-07-03T06:39:50.751Z",
		"size": 7748,
		"path": "../public/assets/poppins-latin-500-normal-C8OXljZJ.woff2"
	},
	"/assets/poppins-latin-600-normal-BJdTmd5m.woff": {
		"type": "font/woff",
		"etag": "\"2968-qejfDIZzLBPBJakq0o8EslpywF0\"",
		"mtime": "2026-07-03T06:39:50.753Z",
		"size": 10600,
		"path": "../public/assets/poppins-latin-600-normal-BJdTmd5m.woff"
	},
	"/assets/poppins-latin-500-normal-DGXqpDMm.woff": {
		"type": "font/woff",
		"etag": "\"2884-NjO1KBkwhBSAPr6hd7yryWiHH44\"",
		"mtime": "2026-07-03T06:39:50.751Z",
		"size": 10372,
		"path": "../public/assets/poppins-latin-500-normal-DGXqpDMm.woff"
	},
	"/assets/poppins-latin-600-normal-zEkxB9Mr.woff2": {
		"type": "font/woff2",
		"etag": "\"1f40-F5+X7AJ18JYDqNuU1DgOtYTYHNU\"",
		"mtime": "2026-07-03T06:39:50.754Z",
		"size": 8e3,
		"path": "../public/assets/poppins-latin-600-normal-zEkxB9Mr.woff2"
	},
	"/assets/poppins-latin-700-normal-BVuQR_eA.woff": {
		"type": "font/woff",
		"etag": "\"28c0-oLzOFhpMRELDRcrdHjjkg4bjSjQ\"",
		"mtime": "2026-07-03T06:39:50.755Z",
		"size": 10432,
		"path": "../public/assets/poppins-latin-700-normal-BVuQR_eA.woff"
	},
	"/assets/poppins-latin-700-normal-Qrb0O0WB.woff2": {
		"type": "font/woff2",
		"etag": "\"1e88-y3JiEtXVJQIXUqHYRwoPtZPgxJ4\"",
		"mtime": "2026-07-03T06:39:50.757Z",
		"size": 7816,
		"path": "../public/assets/poppins-latin-700-normal-Qrb0O0WB.woff2"
	},
	"/assets/poppins-latin-ext-300-normal-nf6F73WS.woff": {
		"type": "font/woff",
		"etag": "\"1ce4-I+1Vt9S/AmExVf6iorroR6OhZRI\"",
		"mtime": "2026-07-03T06:39:50.759Z",
		"size": 7396,
		"path": "../public/assets/poppins-latin-ext-300-normal-nf6F73WS.woff"
	},
	"/assets/poppins-latin-ext-400-normal-by3JarPu.woff2": {
		"type": "font/woff2",
		"etag": "\"160c-hU5vllMlNwAgRAQhdepX1vg79Ok\"",
		"mtime": "2026-07-03T06:39:50.761Z",
		"size": 5644,
		"path": "../public/assets/poppins-latin-ext-400-normal-by3JarPu.woff2"
	},
	"/assets/poppins-latin-ext-300-normal-Cirz0Guu.woff2": {
		"type": "font/woff2",
		"etag": "\"1594-dAp7vSJ7nedwIqra5uHYACwZX80\"",
		"mtime": "2026-07-03T06:39:50.758Z",
		"size": 5524,
		"path": "../public/assets/poppins-latin-ext-300-normal-Cirz0Guu.woff2"
	},
	"/assets/poppins-latin-ext-400-normal-DaBSavcJ.woff": {
		"type": "font/woff",
		"etag": "\"1d24-g5R2hF/imOpV/66+m4D/IW52esU\"",
		"mtime": "2026-07-03T06:39:50.760Z",
		"size": 7460,
		"path": "../public/assets/poppins-latin-ext-400-normal-DaBSavcJ.woff"
	},
	"/assets/poppins-latin-ext-500-normal-CgAe2rWW.woff": {
		"type": "font/woff",
		"etag": "\"1ccc-DFyv0Rg7BkhYnwJwYIM33miQLdg\"",
		"mtime": "2026-07-03T06:39:50.764Z",
		"size": 7372,
		"path": "../public/assets/poppins-latin-ext-500-normal-CgAe2rWW.woff"
	},
	"/assets/poppins-latin-ext-500-normal-CK-6C4Hw.woff2": {
		"type": "font/woff2",
		"etag": "\"156c-pME+B9QjmcPt7Gput9k/IBr33DY\"",
		"mtime": "2026-07-03T06:39:50.762Z",
		"size": 5484,
		"path": "../public/assets/poppins-latin-ext-500-normal-CK-6C4Hw.woff2"
	},
	"/assets/poppins-latin-ext-600-normal-CAhIAdZj.woff2": {
		"type": "font/woff2",
		"etag": "\"1594-zckNsOxkFI6FcjVKnKntSmmMnaM\"",
		"mtime": "2026-07-03T06:39:50.765Z",
		"size": 5524,
		"path": "../public/assets/poppins-latin-ext-600-normal-CAhIAdZj.woff2"
	},
	"/assets/poppins-latin-ext-700-normal-cby-RkWa.woff2": {
		"type": "font/woff2",
		"etag": "\"1538-V1Zt39He3h9fDuZ6w3aFkkjTGXY\"",
		"mtime": "2026-07-03T06:39:50.767Z",
		"size": 5432,
		"path": "../public/assets/poppins-latin-ext-700-normal-cby-RkWa.woff2"
	},
	"/assets/poppins-latin-ext-600-normal-Df5ffKXP.woff": {
		"type": "font/woff",
		"etag": "\"1d08-OU+yG1GchYgdIeV+G7zHdaqHpvM\"",
		"mtime": "2026-07-03T06:39:50.766Z",
		"size": 7432,
		"path": "../public/assets/poppins-latin-ext-600-normal-Df5ffKXP.woff"
	},
	"/assets/poppins-latin-ext-700-normal-DctTR6Tg.woff": {
		"type": "font/woff",
		"etag": "\"1ca0-PKZDXScfbk9n1C1tFUKufCLi720\"",
		"mtime": "2026-07-03T06:39:50.767Z",
		"size": 7328,
		"path": "../public/assets/poppins-latin-ext-700-normal-DctTR6Tg.woff"
	},
	"/assets/ProductCard-BVSJ8Vke.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c23-XjIPFintzAIq3+qXj5EX8hI7rQY\"",
		"mtime": "2026-07-03T06:39:50.688Z",
		"size": 3107,
		"path": "../public/assets/ProductCard-BVSJ8Vke.js"
	},
	"/assets/products-X2dr4lsm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8d-AOWpKhwB9rrWlMt4xrHKZZ3Cwb8\"",
		"mtime": "2026-07-03T06:39:50.709Z",
		"size": 141,
		"path": "../public/assets/products-X2dr4lsm.js"
	},
	"/assets/products.index-DksGXkag.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14e5-CeT+FHovoDyiG4YDe7fckDZiX9E\"",
		"mtime": "2026-07-03T06:39:50.712Z",
		"size": 5349,
		"path": "../public/assets/products.index-DksGXkag.js"
	},
	"/assets/products._slug-CgkqMt_0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4b30-k1JpxuUZqu3UVshYk10MabFNK00\"",
		"mtime": "2026-07-03T06:39:50.711Z",
		"size": 19248,
		"path": "../public/assets/products._slug-CgkqMt_0.js"
	},
	"/assets/react-3W8R1pOO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d67-k/jMp8fiUtK0ff0w41r7/zWi1Jo\"",
		"mtime": "2026-07-03T06:39:50.712Z",
		"size": 7527,
		"path": "../public/assets/react-3W8R1pOO.js"
	},
	"/assets/react-dom-D7m2pT7X.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"df6-yhzIbE28DjXixeEEd/XExWd8m6w\"",
		"mtime": "2026-07-03T06:39:50.713Z",
		"size": 3574,
		"path": "../public/assets/react-dom-D7m2pT7X.js"
	},
	"/assets/recipes-Bln3KQgG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"63b-hlGkaD6bCttvjxhCR9UVUNO1nR0\"",
		"mtime": "2026-07-03T06:39:50.714Z",
		"size": 1595,
		"path": "../public/assets/recipes-Bln3KQgG.js"
	},
	"/assets/recipes._slug-CJO7Wc7s.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"57a-Jlxb9y8boQvCMTabBsDoLG9HBFw\"",
		"mtime": "2026-07-03T06:39:50.715Z",
		"size": 1402,
		"path": "../public/assets/recipes._slug-CJO7Wc7s.js"
	},
	"/assets/redirect-DCb_aIiF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"271-AJO48VqfkUfrNYq6mvZqsvvYRKY\"",
		"mtime": "2026-07-03T06:39:50.716Z",
		"size": 625,
		"path": "../public/assets/redirect-DCb_aIiF.js"
	},
	"/assets/route-X2dr4lsm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8d-AOWpKhwB9rrWlMt4xrHKZZ3Cwb8\"",
		"mtime": "2026-07-03T06:39:50.717Z",
		"size": 141,
		"path": "../public/assets/route-X2dr4lsm.js"
	},
	"/assets/routes-DsGwkvYZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"59f9-ZdEcjcGEa8dFiAQqw3BxVSPMmws\"",
		"mtime": "2026-07-03T06:39:50.717Z",
		"size": 23033,
		"path": "../public/assets/routes-DsGwkvYZ.js"
	},
	"/assets/root-DLTE-HSj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"20-vSYConOtSP6ciwr9zKsPixNwWmc\"",
		"mtime": "2026-07-03T06:39:50.716Z",
		"size": 32,
		"path": "../public/assets/root-DLTE-HSj.js"
	},
	"/assets/share-2-CEqSwpUn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15a-mDzoVpllETt5GdfRbaEbnBtc1gU\"",
		"mtime": "2026-07-03T06:39:50.719Z",
		"size": 346,
		"path": "../public/assets/share-2-CEqSwpUn.js"
	},
	"/assets/sparkles--RyGcXVX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e3-lV1YRiHB8/XEpBval/6OqpLIPOY\"",
		"mtime": "2026-07-03T06:39:50.720Z",
		"size": 483,
		"path": "../public/assets/sparkles--RyGcXVX.js"
	},
	"/assets/styles-C_1WBZc4.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"19b6b-xk9GlmFvSd6WUrdgNyFl5xFEHQ0\"",
		"mtime": "2026-07-03T06:39:50.769Z",
		"size": 105323,
		"path": "../public/assets/styles-C_1WBZc4.css"
	},
	"/assets/textarea-BHKdq3Js.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"223-xIFedmJ4+QyF4TVr02LFUB1ZCBc\"",
		"mtime": "2026-07-03T06:39:50.722Z",
		"size": 547,
		"path": "../public/assets/textarea-BHKdq3Js.js"
	},
	"/assets/truck-DD9hXS0C.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"296-Pz9FeEnXV3S8Jgq1Wf3DsDy9X9Q\"",
		"mtime": "2026-07-03T06:39:50.723Z",
		"size": 662,
		"path": "../public/assets/truck-DD9hXS0C.js"
	},
	"/assets/types-CHwUWPSh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dc45-bMgn5gfFsG5tXMsQN9o+gVMGRP4\"",
		"mtime": "2026-07-03T06:39:50.725Z",
		"size": 56389,
		"path": "../public/assets/types-CHwUWPSh.js"
	},
	"/assets/tslib.es6-Tae09705.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"42d-qJHuGuq51+EbLaebsBAkbj1JLbk\"",
		"mtime": "2026-07-03T06:39:50.724Z",
		"size": 1069,
		"path": "../public/assets/tslib.es6-Tae09705.js"
	},
	"/assets/useRouter-JBw-O-5s.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e7-7NaqULmAot2KxRXYxp+CSaFyUrI\"",
		"mtime": "2026-07-03T06:39:50.726Z",
		"size": 231,
		"path": "../public/assets/useRouter-JBw-O-5s.js"
	},
	"/assets/wishlist-CYZOsHI_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a3d-3uMyvEsFuGsg2wtS9do8qgy27Uo\"",
		"mtime": "2026-07-03T06:39:50.729Z",
		"size": 2621,
		"path": "../public/assets/wishlist-CYZOsHI_.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_dUfIKO = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_dUfIKO
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
