globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"af-JLLBfs78JgDQrVZNte4ujBLCuds\"",
		"mtime": "2026-07-02T08:34:20.168Z",
		"size": 175,
		"path": "../public/robots.txt"
	},
	"/images/cat-almonds.jpg": {
		"type": "image/jpeg",
		"etag": "\"1160d-1Lnw4xll5K2yxMIUPHSZ2b9QpoY\"",
		"mtime": "2026-07-02T08:34:20.199Z",
		"size": 71181,
		"path": "../public/images/cat-almonds.jpg"
	},
	"/images/blog-energy-balls.jpg": {
		"type": "image/jpeg",
		"etag": "\"20628-pe55iz498KmfC/tlmNdU/QK3Ibc\"",
		"mtime": "2026-07-02T08:34:20.181Z",
		"size": 132648,
		"path": "../public/images/blog-energy-balls.jpg"
	},
	"/images/blog-oats.jpg": {
		"type": "image/jpeg",
		"etag": "\"1aaf2-fUsEpK2a1pWzA+I8xDaaq5icGx0\"",
		"mtime": "2026-07-02T08:34:20.189Z",
		"size": 109298,
		"path": "../public/images/blog-oats.jpg"
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
	"/images/cat-driedfruits.jpg": {
		"type": "image/jpeg",
		"etag": "\"11d52-TZR1bIq2IMn7Pp4u7axnxEu6NWU\"",
		"mtime": "2026-07-02T08:34:20.224Z",
		"size": 73042,
		"path": "../public/images/cat-driedfruits.jpg"
	},
	"/images/cat-walnuts.jpg": {
		"type": "image/jpeg",
		"etag": "\"dbe0-rqMNtMg0rE1icF+PQRGBcfkZLTQ\"",
		"mtime": "2026-07-02T08:34:20.248Z",
		"size": 56288,
		"path": "../public/images/cat-walnuts.jpg"
	},
	"/images/cat-pistachios.jpg": {
		"type": "image/jpeg",
		"etag": "\"ea9c-pEt1n887wHwV90DMoCYIiLFoyPo\"",
		"mtime": "2026-07-02T08:34:20.233Z",
		"size": 60060,
		"path": "../public/images/cat-pistachios.jpg"
	},
	"/images/fssai-logo.png": {
		"type": "image/png",
		"etag": "\"4525-uSt85SLgSiCrppj34qdiQ/jRQw4\"",
		"mtime": "2026-07-05T09:07:14.209Z",
		"size": 17701,
		"path": "../public/images/fssai-logo.png"
	},
	"/images/cat-seeds.jpg": {
		"type": "image/jpeg",
		"etag": "\"1aae8-PjZYu8CKQziMmte9V3uJZXFa7sk\"",
		"mtime": "2026-07-02T08:34:20.240Z",
		"size": 109288,
		"path": "../public/images/cat-seeds.jpg"
	},
	"/assets/about-BAeIyKc1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"65c-EhdE6O7Q8Va1iyEfSodKhZCeIDc\"",
		"mtime": "2026-07-05T10:37:21.161Z",
		"size": 1628,
		"path": "../public/assets/about-BAeIyKc1.js"
	},
	"/images/prod-placeholder.jpg": {
		"type": "image/jpeg",
		"etag": "\"1aae8-PjZYu8CKQziMmte9V3uJZXFa7sk\"",
		"mtime": "2026-07-02T08:34:20.240Z",
		"size": 109288,
		"path": "../public/images/prod-placeholder.jpg"
	},
	"/assets/account-mJ5NmY5U.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"823-vFStHWDTtccGphsZInj1a8qaifo\"",
		"mtime": "2026-07-05T10:37:21.163Z",
		"size": 2083,
		"path": "../public/assets/account-mJ5NmY5U.js"
	},
	"/images/hero-nuts.jpg": {
		"type": "image/jpeg",
		"etag": "\"6fdb4-GAmf4CvbZue+aKLJxUxGdKnOMpk\"",
		"mtime": "2026-07-02T08:34:20.259Z",
		"size": 458164,
		"path": "../public/images/hero-nuts.jpg"
	},
	"/assets/admin-gate.functions-DxVjcWUm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dfc-tLVf1UoxJOWwFz+iiZLMXuyapv8\"",
		"mtime": "2026-07-05T10:37:21.165Z",
		"size": 3580,
		"path": "../public/assets/admin-gate.functions-DxVjcWUm.js"
	},
	"/assets/auth-JT3rjI_f.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"244f-sVGI+ly1q/krPvfS8UIWSmNSKDA\"",
		"mtime": "2026-07-05T10:37:21.166Z",
		"size": 9295,
		"path": "../public/assets/auth-JT3rjI_f.js"
	},
	"/assets/admin-login-CpBc2ISt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8f6-XSVaK8VJqSuIyteEXE1as3Rdul0\"",
		"mtime": "2026-07-05T10:37:21.166Z",
		"size": 2294,
		"path": "../public/assets/admin-login-CpBc2ISt.js"
	},
	"/assets/cart-DVnWmbVw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2115-c2MasJxWGkynMz0gA0GdtpQ/SvQ\"",
		"mtime": "2026-07-05T10:37:21.167Z",
		"size": 8469,
		"path": "../public/assets/cart-DVnWmbVw.js"
	},
	"/assets/category._slug-DF2aBARd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"39d-6L6jLN+6yk/Y4wGRw5KRwbjd2Pw\"",
		"mtime": "2026-07-05T10:37:21.167Z",
		"size": 925,
		"path": "../public/assets/category._slug-DF2aBARd.js"
	},
	"/assets/checkout-B00uh9or.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"163c-L/x3cbVu6NtOkM5nd6XTSYhY3sI\"",
		"mtime": "2026-07-05T10:37:21.169Z",
		"size": 5692,
		"path": "../public/assets/checkout-B00uh9or.js"
	},
	"/assets/circle-check-_H02XZht.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a7-1bxZ/Qq5Yd1YDKQ5EP88sCDA4Z4\"",
		"mtime": "2026-07-05T10:37:21.169Z",
		"size": 167,
		"path": "../public/assets/circle-check-_H02XZht.js"
	},
	"/assets/admin-CZCQ7D7z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ceae-Ao86iJh7uS5/dSCoowSTD+58jpM\"",
		"mtime": "2026-07-05T10:37:21.165Z",
		"size": 118446,
		"path": "../public/assets/admin-CZCQ7D7z.js"
	},
	"/assets/contact-D7vcYDhG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"720-yYad6uhaGdyi1yrAUBqB6Qpa6zc\"",
		"mtime": "2026-07-05T10:37:21.170Z",
		"size": 1824,
		"path": "../public/assets/contact-D7vcYDhG.js"
	},
	"/assets/diet-plan-CXKD_3xR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11c9-A+bI5yq0QHms00QpNvj+G5vEzVk\"",
		"mtime": "2026-07-05T10:37:21.171Z",
		"size": 4553,
		"path": "../public/assets/diet-plan-CXKD_3xR.js"
	},
	"/assets/ClientOnly-DSdhhBBT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4a69-WyrxZtLqUfq4LPXTDSB800hvpRE\"",
		"mtime": "2026-07-05T10:37:21.140Z",
		"size": 19049,
		"path": "../public/assets/ClientOnly-DSdhhBBT.js"
	},
	"/assets/dist-Bg0gP_8Y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1845-Gj3aDZkSQOR/R0n1AjFRh4uS7BQ\"",
		"mtime": "2026-07-05T10:37:21.173Z",
		"size": 6213,
		"path": "../public/assets/dist-Bg0gP_8Y.js"
	},
	"/assets/format-E5Vv_E-p.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7f-zxOSwp5R+mO6vM5x62lnPAUARt0\"",
		"mtime": "2026-07-05T10:37:21.173Z",
		"size": 127,
		"path": "../public/assets/format-E5Vv_E-p.js"
	},
	"/assets/label-F2uoHD9x.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"28d-tqINIbdVlzvxNcCgZiTzucW+rw8\"",
		"mtime": "2026-07-05T10:37:21.175Z",
		"size": 653,
		"path": "../public/assets/label-F2uoHD9x.js"
	},
	"/assets/dist-BQgu0l1k.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"276-sRzGkH5+j+Fgjn3CCh/F7O3WG/o\"",
		"mtime": "2026-07-05T10:37:21.172Z",
		"size": 630,
		"path": "../public/assets/dist-BQgu0l1k.js"
	},
	"/assets/jsx-runtime-DGeXAQPT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3ab-mgnSm9dUpwL2+z7tKxJ2MsN0fOM\"",
		"mtime": "2026-07-05T10:37:21.175Z",
		"size": 939,
		"path": "../public/assets/jsx-runtime-DGeXAQPT.js"
	},
	"/assets/input-B0LJIoBD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"289-9+6gbXmmh0El+filadFroACHsnE\"",
		"mtime": "2026-07-05T10:37:21.174Z",
		"size": 649,
		"path": "../public/assets/input-B0LJIoBD.js"
	},
	"/assets/link-DbAi-u-e.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1168-r6U2cRGIEFPBf5KqRDj2zstM1ts\"",
		"mtime": "2026-07-05T10:37:21.176Z",
		"size": 4456,
		"path": "../public/assets/link-DbAi-u-e.js"
	},
	"/assets/matchContext-CB1h8nGv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"aa-idte0MmwM68yYuOTzjHGv/P6fak\"",
		"mtime": "2026-07-05T10:37:21.177Z",
		"size": 170,
		"path": "../public/assets/matchContext-CB1h8nGv.js"
	},
	"/assets/leaf-BJ0eWGZW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fe-/MIvS7XMDVQKOvVrDBY4NPzVsz8\"",
		"mtime": "2026-07-05T10:37:21.176Z",
		"size": 254,
		"path": "../public/assets/leaf-BJ0eWGZW.js"
	},
	"/assets/order._id-CKIvVURe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e32-4c+eTF7J+aN2Cv1U/u9eGUvjJ8c\"",
		"mtime": "2026-07-05T10:37:21.178Z",
		"size": 7730,
		"path": "../public/assets/order._id-CKIvVURe.js"
	},
	"/assets/plus-DXK9TpSj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ce-FHsYgAJqf8WGUxbNlhvuaqSKEzg\"",
		"mtime": "2026-07-05T10:37:21.179Z",
		"size": 206,
		"path": "../public/assets/plus-DXK9TpSj.js"
	},
	"/assets/poppins-devanagari-300-normal-5EpgE5P1.woff": {
		"type": "font/woff",
		"etag": "\"ceac-lJYRKNlL7XxeaXqSM6tN+eWxfOE\"",
		"mtime": "2026-07-05T10:37:21.194Z",
		"size": 52908,
		"path": "../public/assets/poppins-devanagari-300-normal-5EpgE5P1.woff"
	},
	"/assets/poppins-devanagari-300-normal-D7nrgzLr.woff2": {
		"type": "font/woff2",
		"etag": "\"99f4-WNrgXa27E9CkL/p6OkUVoYZR4SE\"",
		"mtime": "2026-07-05T10:37:21.195Z",
		"size": 39412,
		"path": "../public/assets/poppins-devanagari-300-normal-D7nrgzLr.woff2"
	},
	"/assets/poppins-devanagari-400-normal-CJDn6rn8.woff2": {
		"type": "font/woff2",
		"etag": "\"9aec-+heN9EaOhnzMHYotWFtIR1rPUqo\"",
		"mtime": "2026-07-05T10:37:21.196Z",
		"size": 39660,
		"path": "../public/assets/poppins-devanagari-400-normal-CJDn6rn8.woff2"
	},
	"/assets/poppins-devanagari-500-normal-BIdkeU1p.woff2": {
		"type": "font/woff2",
		"etag": "\"98ac-FfduLsaYHzsmK+dTRQej4D+0kzM\"",
		"mtime": "2026-07-05T10:37:21.197Z",
		"size": 39084,
		"path": "../public/assets/poppins-devanagari-500-normal-BIdkeU1p.woff2"
	},
	"/assets/poppins-devanagari-400-normal-CqVvlrh5.woff": {
		"type": "font/woff",
		"etag": "\"cef4-Q9BUPWHGyYmYg0WAnAKuATennh4\"",
		"mtime": "2026-07-05T10:37:21.197Z",
		"size": 52980,
		"path": "../public/assets/poppins-devanagari-400-normal-CqVvlrh5.woff"
	},
	"/assets/poppins-devanagari-500-normal-DMPDjHtT.woff": {
		"type": "font/woff",
		"etag": "\"ccc8-8jDg1gtG4+0okzl7ZW1O9UKGG0E\"",
		"mtime": "2026-07-05T10:37:21.198Z",
		"size": 52424,
		"path": "../public/assets/poppins-devanagari-500-normal-DMPDjHtT.woff"
	},
	"/assets/poppins-devanagari-600-normal-ClASKHrr.woff": {
		"type": "font/woff",
		"etag": "\"cd50-tNlIea6o6ZDqycdJUZrDXE8b5cs\"",
		"mtime": "2026-07-05T10:37:21.199Z",
		"size": 52560,
		"path": "../public/assets/poppins-devanagari-600-normal-ClASKHrr.woff"
	},
	"/assets/poppins-devanagari-600-normal-STEjXBNN.woff2": {
		"type": "font/woff2",
		"etag": "\"997c-qGf4mE9ZWpp57X22lffBTB3znms\"",
		"mtime": "2026-07-05T10:37:21.200Z",
		"size": 39292,
		"path": "../public/assets/poppins-devanagari-600-normal-STEjXBNN.woff2"
	},
	"/assets/index-aeZISDyG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"981d8-DI0ToKZjjadNrzA4BLQ7fTrqM28\"",
		"mtime": "2026-07-05T10:37:21.139Z",
		"size": 623064,
		"path": "../public/assets/index-aeZISDyG.js"
	},
	"/assets/poppins-devanagari-700-normal-fHs-vx92.woff": {
		"type": "font/woff",
		"etag": "\"cc18-RLulCJGQZRS7d5P8G7JyjBNCtlQ\"",
		"mtime": "2026-07-05T10:37:21.201Z",
		"size": 52248,
		"path": "../public/assets/poppins-devanagari-700-normal-fHs-vx92.woff"
	},
	"/assets/poppins-latin-300-normal-Dku2WoCh.woff2": {
		"type": "font/woff2",
		"etag": "\"1ea0-qem6/mRmb0WVBRoOiVtHpfo55n4\"",
		"mtime": "2026-07-05T10:37:21.202Z",
		"size": 7840,
		"path": "../public/assets/poppins-latin-300-normal-Dku2WoCh.woff2"
	},
	"/assets/poppins-latin-300-normal-DCNuMXUj.woff": {
		"type": "font/woff",
		"etag": "\"2900-cgy8/f2gng3NR1KmQL9rti00yds\"",
		"mtime": "2026-07-05T10:37:21.202Z",
		"size": 10496,
		"path": "../public/assets/poppins-latin-300-normal-DCNuMXUj.woff"
	},
	"/assets/poppins-devanagari-700-normal-O-jipLrW.woff2": {
		"type": "font/woff2",
		"etag": "\"9954-YmyFpGMZyKQZKjnfAlsNz3JPyWo\"",
		"mtime": "2026-07-05T10:37:21.201Z",
		"size": 39252,
		"path": "../public/assets/poppins-devanagari-700-normal-O-jipLrW.woff2"
	},
	"/assets/poppins-latin-400-normal-BOb3E3N0.woff": {
		"type": "font/woff",
		"etag": "\"2924-luPBchCxifQ/9oXwK0z0nCIDoMs\"",
		"mtime": "2026-07-05T10:37:21.203Z",
		"size": 10532,
		"path": "../public/assets/poppins-latin-400-normal-BOb3E3N0.woff"
	},
	"/assets/poppins-latin-500-normal-C8OXljZJ.woff2": {
		"type": "font/woff2",
		"etag": "\"1e44-DaLRfnOPRtKgnm+3lp2kUXGamCA\"",
		"mtime": "2026-07-05T10:37:21.204Z",
		"size": 7748,
		"path": "../public/assets/poppins-latin-500-normal-C8OXljZJ.woff2"
	},
	"/assets/poppins-latin-400-normal-cpxAROuN.woff2": {
		"type": "font/woff2",
		"etag": "\"1ecc-rG1xtNX90rPavJoG/2wAHkJR2gs\"",
		"mtime": "2026-07-05T10:37:21.203Z",
		"size": 7884,
		"path": "../public/assets/poppins-latin-400-normal-cpxAROuN.woff2"
	},
	"/assets/poppins-latin-500-normal-DGXqpDMm.woff": {
		"type": "font/woff",
		"etag": "\"2884-NjO1KBkwhBSAPr6hd7yryWiHH44\"",
		"mtime": "2026-07-05T10:37:21.204Z",
		"size": 10372,
		"path": "../public/assets/poppins-latin-500-normal-DGXqpDMm.woff"
	},
	"/assets/poppins-latin-600-normal-BJdTmd5m.woff": {
		"type": "font/woff",
		"etag": "\"2968-qejfDIZzLBPBJakq0o8EslpywF0\"",
		"mtime": "2026-07-05T10:37:21.205Z",
		"size": 10600,
		"path": "../public/assets/poppins-latin-600-normal-BJdTmd5m.woff"
	},
	"/assets/poppins-latin-600-normal-zEkxB9Mr.woff2": {
		"type": "font/woff2",
		"etag": "\"1f40-F5+X7AJ18JYDqNuU1DgOtYTYHNU\"",
		"mtime": "2026-07-05T10:37:21.205Z",
		"size": 8e3,
		"path": "../public/assets/poppins-latin-600-normal-zEkxB9Mr.woff2"
	},
	"/assets/poppins-latin-700-normal-Qrb0O0WB.woff2": {
		"type": "font/woff2",
		"etag": "\"1e88-y3JiEtXVJQIXUqHYRwoPtZPgxJ4\"",
		"mtime": "2026-07-05T10:37:21.206Z",
		"size": 7816,
		"path": "../public/assets/poppins-latin-700-normal-Qrb0O0WB.woff2"
	},
	"/assets/poppins-latin-ext-300-normal-Cirz0Guu.woff2": {
		"type": "font/woff2",
		"etag": "\"1594-dAp7vSJ7nedwIqra5uHYACwZX80\"",
		"mtime": "2026-07-05T10:37:21.207Z",
		"size": 5524,
		"path": "../public/assets/poppins-latin-ext-300-normal-Cirz0Guu.woff2"
	},
	"/assets/poppins-latin-700-normal-BVuQR_eA.woff": {
		"type": "font/woff",
		"etag": "\"28c0-oLzOFhpMRELDRcrdHjjkg4bjSjQ\"",
		"mtime": "2026-07-05T10:37:21.206Z",
		"size": 10432,
		"path": "../public/assets/poppins-latin-700-normal-BVuQR_eA.woff"
	},
	"/assets/poppins-latin-ext-300-normal-nf6F73WS.woff": {
		"type": "font/woff",
		"etag": "\"1ce4-I+1Vt9S/AmExVf6iorroR6OhZRI\"",
		"mtime": "2026-07-05T10:37:21.208Z",
		"size": 7396,
		"path": "../public/assets/poppins-latin-ext-300-normal-nf6F73WS.woff"
	},
	"/assets/poppins-latin-ext-400-normal-by3JarPu.woff2": {
		"type": "font/woff2",
		"etag": "\"160c-hU5vllMlNwAgRAQhdepX1vg79Ok\"",
		"mtime": "2026-07-05T10:37:21.209Z",
		"size": 5644,
		"path": "../public/assets/poppins-latin-ext-400-normal-by3JarPu.woff2"
	},
	"/assets/poppins-latin-ext-400-normal-DaBSavcJ.woff": {
		"type": "font/woff",
		"etag": "\"1d24-g5R2hF/imOpV/66+m4D/IW52esU\"",
		"mtime": "2026-07-05T10:37:21.208Z",
		"size": 7460,
		"path": "../public/assets/poppins-latin-ext-400-normal-DaBSavcJ.woff"
	},
	"/assets/poppins-latin-ext-500-normal-CgAe2rWW.woff": {
		"type": "font/woff",
		"etag": "\"1ccc-DFyv0Rg7BkhYnwJwYIM33miQLdg\"",
		"mtime": "2026-07-05T10:37:21.211Z",
		"size": 7372,
		"path": "../public/assets/poppins-latin-ext-500-normal-CgAe2rWW.woff"
	},
	"/assets/poppins-latin-ext-500-normal-CK-6C4Hw.woff2": {
		"type": "font/woff2",
		"etag": "\"156c-pME+B9QjmcPt7Gput9k/IBr33DY\"",
		"mtime": "2026-07-05T10:37:21.210Z",
		"size": 5484,
		"path": "../public/assets/poppins-latin-ext-500-normal-CK-6C4Hw.woff2"
	},
	"/assets/poppins-latin-ext-600-normal-CAhIAdZj.woff2": {
		"type": "font/woff2",
		"etag": "\"1594-zckNsOxkFI6FcjVKnKntSmmMnaM\"",
		"mtime": "2026-07-05T10:37:21.212Z",
		"size": 5524,
		"path": "../public/assets/poppins-latin-ext-600-normal-CAhIAdZj.woff2"
	},
	"/assets/poppins-latin-ext-600-normal-Df5ffKXP.woff": {
		"type": "font/woff",
		"etag": "\"1d08-OU+yG1GchYgdIeV+G7zHdaqHpvM\"",
		"mtime": "2026-07-05T10:37:21.213Z",
		"size": 7432,
		"path": "../public/assets/poppins-latin-ext-600-normal-Df5ffKXP.woff"
	},
	"/assets/poppins-latin-ext-700-normal-cby-RkWa.woff2": {
		"type": "font/woff2",
		"etag": "\"1538-V1Zt39He3h9fDuZ6w3aFkkjTGXY\"",
		"mtime": "2026-07-05T10:37:21.215Z",
		"size": 5432,
		"path": "../public/assets/poppins-latin-ext-700-normal-cby-RkWa.woff2"
	},
	"/assets/poppins-latin-ext-700-normal-DctTR6Tg.woff": {
		"type": "font/woff",
		"etag": "\"1ca0-PKZDXScfbk9n1C1tFUKufCLi720\"",
		"mtime": "2026-07-05T10:37:21.214Z",
		"size": 7328,
		"path": "../public/assets/poppins-latin-ext-700-normal-DctTR6Tg.woff"
	},
	"/assets/ProductCard-Bp0va7Wk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cb0-Pjd9TkSfSC23JF6OhdyjVxWAb1o\"",
		"mtime": "2026-07-05T10:37:21.159Z",
		"size": 3248,
		"path": "../public/assets/ProductCard-Bp0va7Wk.js"
	},
	"/assets/products-BKsE4YQw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8d-zkckjm8Ajcb+1Dvy5Q+sZ+Z2nSE\"",
		"mtime": "2026-07-05T10:37:21.181Z",
		"size": 141,
		"path": "../public/assets/products-BKsE4YQw.js"
	},
	"/assets/products._slug-BR_W4IHr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4b5d-nGqAAFnaZP+czGZB8V0IEFUWcnA\"",
		"mtime": "2026-07-05T10:37:21.182Z",
		"size": 19293,
		"path": "../public/assets/products._slug-BR_W4IHr.js"
	},
	"/assets/react-3W8R1pOO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d67-k/jMp8fiUtK0ff0w41r7/zWi1Jo\"",
		"mtime": "2026-07-05T10:37:21.183Z",
		"size": 7527,
		"path": "../public/assets/react-3W8R1pOO.js"
	},
	"/assets/react-dom-D7m2pT7X.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"df6-yhzIbE28DjXixeEEd/XExWd8m6w\"",
		"mtime": "2026-07-05T10:37:21.184Z",
		"size": 3574,
		"path": "../public/assets/react-dom-D7m2pT7X.js"
	},
	"/assets/recipes-DViE-Yi9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"63b-+X24w3AZi37F1TI45WE0ONlNNWI\"",
		"mtime": "2026-07-05T10:37:21.184Z",
		"size": 1595,
		"path": "../public/assets/recipes-DViE-Yi9.js"
	},
	"/assets/recipes._slug-DZaFN1FD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"57a-5Kc0oYaTfJNn191V10IpmqPzuDg\"",
		"mtime": "2026-07-05T10:37:21.185Z",
		"size": 1402,
		"path": "../public/assets/recipes._slug-DZaFN1FD.js"
	},
	"/assets/redirect-DCb_aIiF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"271-AJO48VqfkUfrNYq6mvZqsvvYRKY\"",
		"mtime": "2026-07-05T10:37:21.185Z",
		"size": 625,
		"path": "../public/assets/redirect-DCb_aIiF.js"
	},
	"/assets/root-DLTE-HSj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"20-vSYConOtSP6ciwr9zKsPixNwWmc\"",
		"mtime": "2026-07-05T10:37:21.186Z",
		"size": 32,
		"path": "../public/assets/root-DLTE-HSj.js"
	},
	"/assets/products.index-BpyyUsiV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14db-kAuVy9zmXtLeXNMHamhbd5S6iFU\"",
		"mtime": "2026-07-05T10:37:21.183Z",
		"size": 5339,
		"path": "../public/assets/products.index-BpyyUsiV.js"
	},
	"/assets/route-BKsE4YQw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8d-zkckjm8Ajcb+1Dvy5Q+sZ+Z2nSE\"",
		"mtime": "2026-07-05T10:37:21.187Z",
		"size": 141,
		"path": "../public/assets/route-BKsE4YQw.js"
	},
	"/assets/routes-BaIkiDk-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7b81-2Ut8/tGU07VPfElZphV/ek2t1G0\"",
		"mtime": "2026-07-05T10:37:21.187Z",
		"size": 31617,
		"path": "../public/assets/routes-BaIkiDk-.js"
	},
	"/assets/shield-check-Dd93KsMr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"135-qD8m6Kx+hl2T5B5u3OMLsChULFg\"",
		"mtime": "2026-07-05T10:37:21.188Z",
		"size": 309,
		"path": "../public/assets/shield-check-Dd93KsMr.js"
	},
	"/assets/share-2-DUXb-bx0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15a-oTS9V9Ah2m+1liYf8exHBjsGRDM\"",
		"mtime": "2026-07-05T10:37:21.188Z",
		"size": 346,
		"path": "../public/assets/share-2-DUXb-bx0.js"
	},
	"/assets/sparkles-Dp_kVXlY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e3-8Bd62M8m/SL+XFY9D8F9gLmbqSw\"",
		"mtime": "2026-07-05T10:37:21.189Z",
		"size": 483,
		"path": "../public/assets/sparkles-Dp_kVXlY.js"
	},
	"/assets/styles-Dvrhe2U5.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1aae8-G8KA1qMOCy/52+mvTbbM7FncIBg\"",
		"mtime": "2026-07-05T10:37:21.216Z",
		"size": 109288,
		"path": "../public/assets/styles-Dvrhe2U5.css"
	},
	"/assets/truck-CzUJjMti.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"18b-50FjkM7ZfbLYi+S7E1aDoXPWarI\"",
		"mtime": "2026-07-05T10:37:21.189Z",
		"size": 395,
		"path": "../public/assets/truck-CzUJjMti.js"
	},
	"/assets/textarea-DmzKS762.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"223-0bzQ7IxRYU1/10B5caVClChM4zo\"",
		"mtime": "2026-07-05T10:37:21.189Z",
		"size": 547,
		"path": "../public/assets/textarea-DmzKS762.js"
	},
	"/assets/tslib.es6-Tae09705.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"42d-qJHuGuq51+EbLaebsBAkbj1JLbk\"",
		"mtime": "2026-07-05T10:37:21.191Z",
		"size": 1069,
		"path": "../public/assets/tslib.es6-Tae09705.js"
	},
	"/assets/types-CHwUWPSh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dc45-bMgn5gfFsG5tXMsQN9o+gVMGRP4\"",
		"mtime": "2026-07-05T10:37:21.191Z",
		"size": 56389,
		"path": "../public/assets/types-CHwUWPSh.js"
	},
	"/assets/useRouter-JBw-O-5s.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e7-7NaqULmAot2KxRXYxp+CSaFyUrI\"",
		"mtime": "2026-07-05T10:37:21.192Z",
		"size": 231,
		"path": "../public/assets/useRouter-JBw-O-5s.js"
	},
	"/assets/wishlist-kAwSQpXV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a3d-3XixrbVUt2EiixQAT6Q6towu4Eg\"",
		"mtime": "2026-07-05T10:37:21.193Z",
		"size": 2621,
		"path": "../public/assets/wishlist-kAwSQpXV.js"
	},
	"/images/products/arjun-chaal.png": {
		"type": "image/png",
		"etag": "\"34a07-FlPIXzJtmMlDN6KbDlccztFa4NE\"",
		"mtime": "2026-07-04T12:45:59.060Z",
		"size": 215559,
		"path": "../public/images/products/arjun-chaal.png"
	},
	"/images/products/chia-seeds.png": {
		"type": "image/png",
		"etag": "\"74819-uTAhwHNuuWKcQ5L9f/EScQ0PnGI\"",
		"mtime": "2026-07-04T13:14:42.198Z",
		"size": 477209,
		"path": "../public/images/products/chia-seeds.png"
	},
	"/images/products/flax-seeds.png": {
		"type": "image/png",
		"etag": "\"753c8-J0pAPx0JiQ5GpwLdtcvcuRNH9Oo\"",
		"mtime": "2026-07-04T13:14:42.196Z",
		"size": 480200,
		"path": "../public/images/products/flax-seeds.png"
	},
	"/images/products/hadjod.png": {
		"type": "image/png",
		"etag": "\"3874f-M1SmK/dsmoI4rKcJwgvvYj05CDA\"",
		"mtime": "2026-07-04T12:45:59.065Z",
		"size": 231247,
		"path": "../public/images/products/hadjod.png"
	},
	"/images/products/gud-chana.png": {
		"type": "image/png",
		"etag": "\"6611c-3y//kTv/WtZuBLX0yKJc4ABV84I\"",
		"mtime": "2026-07-04T13:12:50.831Z",
		"size": 418076,
		"path": "../public/images/products/gud-chana.png"
	},
	"/images/products/kali-musli.png": {
		"type": "image/png",
		"etag": "\"3a3a2-m8WyssLIKOamAlqLoJTbKTNH/gM\"",
		"mtime": "2026-07-04T13:12:50.827Z",
		"size": 238498,
		"path": "../public/images/products/kali-musli.png"
	},
	"/images/products/kounch-beej.png": {
		"type": "image/png",
		"etag": "\"3c385-n3MiqU9mA80dZGcduvRm7f/AgaQ\"",
		"mtime": "2026-07-04T12:45:59.062Z",
		"size": 246661,
		"path": "../public/images/products/kounch-beej.png"
	},
	"/images/products/kismis.png": {
		"type": "image/png",
		"etag": "\"5ac98-rox7mlVZsrwwwSIOJg/juN8qs34\"",
		"mtime": "2026-07-04T13:12:50.825Z",
		"size": 371864,
		"path": "../public/images/products/kismis.png"
	},
	"/images/products/mamra-almond-red.png": {
		"type": "image/png",
		"etag": "\"622fb-6pOrvWjTYdsigCljLisf4bLL1BA\"",
		"mtime": "2026-07-04T13:14:42.194Z",
		"size": 402171,
		"path": "../public/images/products/mamra-almond-red.png"
	},
	"/images/products/mamra-almond.png": {
		"type": "image/png",
		"etag": "\"61f5b-C+yn1SYqyRwSo3JyxrZjxhb04BA\"",
		"mtime": "2026-07-04T13:12:50.822Z",
		"size": 401243,
		"path": "../public/images/products/mamra-almond.png"
	},
	"/images/products/pista-roasted.png": {
		"type": "image/png",
		"etag": "\"5e959-k6z5wZ0HScmr3Q+yweeuTXSZ5Y8\"",
		"mtime": "2026-07-04T12:45:59.057Z",
		"size": 387417,
		"path": "../public/images/products/pista-roasted.png"
	},
	"/images/products/ashwagandha-powder-200g.png": {
		"type": "image/png",
		"etag": "\"2824c2-AuqgDOcoK8RGy0N4YSB3oQaJR2I\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 2630850,
		"path": "../public/images/products/ashwagandha-powder-200g.png"
	},
	"/images/products/babool-gond-500g.png": {
		"type": "image/png",
		"etag": "\"236095-/eThLQopOYdaLrQDCdgG7nJxiqo\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 2318485,
		"path": "../public/images/products/babool-gond-500g.png"
	},
	"/images/products/california-almond-1kg.png": {
		"type": "image/png",
		"etag": "\"2418b3-G8LXumN71UijSZoGo15IcGyt0xE\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 2365619,
		"path": "../public/images/products/california-almond-1kg.png"
	},
	"/images/products/chana-sattu.png": {
		"type": "image/png",
		"etag": "\"24691e-MmIFxpVFhXWFVT/p9K+qSwIUP5E\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 2386206,
		"path": "../public/images/products/chana-sattu.png"
	},
	"/images/products/diet-mixture.png": {
		"type": "image/png",
		"etag": "\"25423c-BmccxxNKcAqYgdnNBEbBQXDP2Yw\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 2441788,
		"path": "../public/images/products/diet-mixture.png"
	},
	"/images/products/elaichi-50g.png": {
		"type": "image/png",
		"etag": "\"214b56-AkSsVTdLNvUaNvKQ3mye0fKNwao\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 2181974,
		"path": "../public/images/products/elaichi-50g.png"
	},
	"/images/products/kaju-w-240-1kg.png": {
		"type": "image/png",
		"etag": "\"26042e-6Fbpr3SrDnvBV7AaRuth3zyqrDQ\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 2491438,
		"path": "../public/images/products/kaju-w-240-1kg.png"
	},
	"/images/products/mix-berries-250g.png": {
		"type": "image/png",
		"etag": "\"2018a0-Q2bJ+1Ozfe/7hIf4Jngo8YV95WE\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 2103456,
		"path": "../public/images/products/mix-berries-250g.png"
	},
	"/images/products/bans-murabba-1kg.png": {
		"type": "image/png",
		"etag": "\"2e10b4-g7yr/wVPPTEIEyMhhWsDLTf3L9Y\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 3018932,
		"path": "../public/images/products/bans-murabba-1kg.png"
	},
	"/images/products/black-tea.png": {
		"type": "image/png",
		"etag": "\"2eddb4-ZwZn8JMcMecYdogZ2DarbNT30Aw\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 3071412,
		"path": "../public/images/products/black-tea.png"
	},
	"/images/products/jau-sattu.png": {
		"type": "image/png",
		"etag": "\"2929d4-OykKyUYhPr2auk++d22eS/nljxw\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 2697684,
		"path": "../public/images/products/jau-sattu.png"
	},
	"/videos/reel-3.mp4": {
		"type": "video/mp4",
		"etag": "\"88bb4e-56DWCQqtrA5RCX+kCTnZfa2U3dI\"",
		"mtime": "2026-07-02T07:43:32.657Z",
		"size": 8960846,
		"path": "../public/videos/reel-3.mp4"
	},
	"/images/products/mix-vegetables.png": {
		"type": "image/png",
		"etag": "\"2d990e-+Wf97uru5eXPVbsUoqQZPqnsDSs\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 2988302,
		"path": "../public/images/products/mix-vegetables.png"
	},
	"/images/products/phool-makhana-200g.png": {
		"type": "image/png",
		"etag": "\"25e4fd-kI3RLreaRzGTlHvkhuvq/XuZFBo\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 2483453,
		"path": "../public/images/products/phool-makhana-200g.png"
	},
	"/images/products/titan-fuel-lemon-1kg.png": {
		"type": "image/png",
		"etag": "\"1ed9b6-nRocEOoLgkq2UR3CithHY5XKgnQ\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 2021814,
		"path": "../public/images/products/titan-fuel-lemon-1kg.png"
	},
	"/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_31_02 PM (1).png": {
		"type": "image/png",
		"etag": "\"1ff53f-rNXvgHSu4N1t/5NUv+kVBMVB6bE\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 2094399,
		"path": "../public/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_31_02 PM (1).png"
	},
	"/images/products/titan-fuel-orange-1kg.png": {
		"type": "image/png",
		"etag": "\"1cc008-yfsT7UkeDgWgJC6gnXqj4VIu44w\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 1884168,
		"path": "../public/images/products/titan-fuel-orange-1kg.png"
	},
	"/images/products/pumpkin-seeds.png": {
		"type": "image/png",
		"etag": "\"262358-I93jth5rzUk5UzWWPbBmMpu+AZc\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 2499416,
		"path": "../public/images/products/pumpkin-seeds.png"
	},
	"/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_31_02 PM.png": {
		"type": "image/png",
		"etag": "\"2018a0-Q2bJ+1Ozfe/7hIf4Jngo8YV95WE\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 2103456,
		"path": "../public/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_31_02 PM.png"
	},
	"/images/products/triphla-powder-200g.png": {
		"type": "image/png",
		"etag": "\"24e5dc-rBBtiVHF/U8LdMnkbIdmooyNOu0\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 2418140,
		"path": "../public/images/products/triphla-powder-200g.png"
	},
	"/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_31_11 PM.png": {
		"type": "image/png",
		"etag": "\"214b56-AkSsVTdLNvUaNvKQ3mye0fKNwao\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 2181974,
		"path": "../public/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_31_11 PM.png"
	},
	"/images/products/sunflower-seeds.png": {
		"type": "image/png",
		"etag": "\"2a9977-eDFOfCL94mxr4w4y0lMvJ/XzoE0\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 2791799,
		"path": "../public/images/products/sunflower-seeds.png"
	},
	"/images/products/satawari.png": {
		"type": "image/png",
		"etag": "\"2c0fab-bQn2NlPUOvK2PlchsmNZKaHHmWo\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 2887595,
		"path": "../public/images/products/satawari.png"
	},
	"/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_31_19 PM.png": {
		"type": "image/png",
		"etag": "\"26042e-6Fbpr3SrDnvBV7AaRuth3zyqrDQ\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 2491438,
		"path": "../public/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_31_19 PM.png"
	},
	"/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_31_25 PM.png": {
		"type": "image/png",
		"etag": "\"1cc008-yfsT7UkeDgWgJC6gnXqj4VIu44w\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 1884168,
		"path": "../public/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_31_25 PM.png"
	},
	"/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_31_40 PM.png": {
		"type": "image/png",
		"etag": "\"1ed9b6-nRocEOoLgkq2UR3CithHY5XKgnQ\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 2021814,
		"path": "../public/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_31_40 PM.png"
	},
	"/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_32_12 PM.png": {
		"type": "image/png",
		"etag": "\"236095-/eThLQopOYdaLrQDCdgG7nJxiqo\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 2318485,
		"path": "../public/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_32_12 PM.png"
	},
	"/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_32_20 PM.png": {
		"type": "image/png",
		"etag": "\"25423c-BmccxxNKcAqYgdnNBEbBQXDP2Yw\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 2441788,
		"path": "../public/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_32_20 PM.png"
	},
	"/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_32_21 PM.png": {
		"type": "image/png",
		"etag": "\"2541f8-Jd8c1WHaNO2QV+oPyWsLNDK8le0\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 2441720,
		"path": "../public/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_32_21 PM.png"
	},
	"/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_32_30 PM.png": {
		"type": "image/png",
		"etag": "\"25e4fd-kI3RLreaRzGTlHvkhuvq/XuZFBo\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 2483453,
		"path": "../public/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_32_30 PM.png"
	},
	"/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_32_35 PM.png": {
		"type": "image/png",
		"etag": "\"2418b3-G8LXumN71UijSZoGo15IcGyt0xE\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 2365619,
		"path": "../public/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_32_35 PM.png"
	},
	"/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_32_43 PM.png": {
		"type": "image/png",
		"etag": "\"262358-I93jth5rzUk5UzWWPbBmMpu+AZc\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 2499416,
		"path": "../public/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_32_43 PM.png"
	},
	"/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_32_16 PM.png": {
		"type": "image/png",
		"etag": "\"2d990e-+Wf97uru5eXPVbsUoqQZPqnsDSs\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 2988302,
		"path": "../public/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_32_16 PM.png"
	},
	"/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_32_52 PM.png": {
		"type": "image/png",
		"etag": "\"24691e-MmIFxpVFhXWFVT/p9K+qSwIUP5E\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 2386206,
		"path": "../public/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_32_52 PM.png"
	},
	"/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_33_28 PM.png": {
		"type": "image/png",
		"etag": "\"24e5dc-rBBtiVHF/U8LdMnkbIdmooyNOu0\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 2418140,
		"path": "../public/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_33_28 PM.png"
	},
	"/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_32_47 PM.png": {
		"type": "image/png",
		"etag": "\"2a9977-eDFOfCL94mxr4w4y0lMvJ/XzoE0\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 2791799,
		"path": "../public/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_32_47 PM.png"
	},
	"/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_34_10 PM.png": {
		"type": "image/png",
		"etag": "\"1782bd-gerXohw5T8eWd2w2oAICSxARQfg\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 1540797,
		"path": "../public/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_34_10 PM.png"
	},
	"/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_32_56 PM.png": {
		"type": "image/png",
		"etag": "\"2929d4-OykKyUYhPr2auk++d22eS/nljxw\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 2697684,
		"path": "../public/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_32_56 PM.png"
	},
	"/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_33_40 PM.png": {
		"type": "image/png",
		"etag": "\"2878ce-1y0Zql+30SRLG4byU7QdZYFJKt8\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 2652366,
		"path": "../public/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_33_40 PM.png"
	},
	"/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_34_15 PM.png": {
		"type": "image/png",
		"etag": "\"19973c-FPceGMRxGGm+htjxXX6P6eq/H34\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 1677116,
		"path": "../public/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_34_15 PM.png"
	},
	"/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_33_45 PM.png": {
		"type": "image/png",
		"etag": "\"2824c2-AuqgDOcoK8RGy0N4YSB3oQaJR2I\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 2630850,
		"path": "../public/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_33_45 PM.png"
	},
	"/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_33_50 PM.png": {
		"type": "image/png",
		"etag": "\"2eddb4-ZwZn8JMcMecYdogZ2DarbNT30Aw\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 3071412,
		"path": "../public/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_33_50 PM.png"
	},
	"/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_33_57 PM.png": {
		"type": "image/png",
		"etag": "\"2c0fab-bQn2NlPUOvK2PlchsmNZKaHHmWo\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 2887595,
		"path": "../public/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_33_57 PM.png"
	},
	"/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_34_00 PM.png": {
		"type": "image/png",
		"etag": "\"2e10b4-g7yr/wVPPTEIEyMhhWsDLTf3L9Y\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 3018932,
		"path": "../public/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_34_00 PM.png"
	},
	"/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_34_03 PM.png": {
		"type": "image/png",
		"etag": "\"2e10b4-g7yr/wVPPTEIEyMhhWsDLTf3L9Y\"",
		"mtime": "1979-12-31T18:30:00.000Z",
		"size": 3018932,
		"path": "../public/images/temp_uploads/ChatGPT Image Jul 5, 2026, 01_34_03 PM.png"
	},
	"/videos/review-3.mp4": {
		"type": "video/mp4",
		"etag": "\"137464b-o4254N3Ga/5R60yUyGvODxOLTWY\"",
		"mtime": "2026-07-02T07:42:19.875Z",
		"size": 20399691,
		"path": "../public/videos/review-3.mp4"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
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
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
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
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
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
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
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
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
