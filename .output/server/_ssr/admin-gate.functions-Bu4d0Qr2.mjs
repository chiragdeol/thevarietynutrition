import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { D as isRedirect, L as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as createSsrRpc } from "./createSsrRpc-DTrrqWBL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-gate.functions-Bu4d0Qr2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var adminLogin = createServerFn({ method: "POST" }).inputValidator((data) => data).handler(createSsrRpc("1ca092f8ed5dd965560486f3c4105eb4367c442e4307f778525cfae34a35e3d6"));
var adminLogout = createServerFn({ method: "POST" }).handler(createSsrRpc("c339090240aeafbb75d5562f2cfa4efb7bbfc80ac48dc900558bf60f43f5f8fa"));
var adminStatus = createServerFn({ method: "GET" }).handler(createSsrRpc("bae7a34e5e57910289a650bdfe18b9fbe1398903680510cce38977c7b790201a"));
var adminListOrders = createServerFn({ method: "GET" }).handler(createSsrRpc("4b12585d0dc1e8314c61ee1b8a7643a5cc6f5ba441f3df814ec9834dd6205f88"));
var adminUpdateOrderStatus = createServerFn({ method: "POST" }).inputValidator((d) => d).handler(createSsrRpc("0ccceceb90dfde2f4c9e62372d354718e6bd5733b4fca2dec9bf8b447a5099cd"));
var adminListCategories = createServerFn({ method: "GET" }).handler(createSsrRpc("70a290071b03bf821bc60bc09c31e4cf4245591b1a29a2819183bb92173faf91"));
var adminSaveCategory = createServerFn({ method: "POST" }).inputValidator((d) => d).handler(createSsrRpc("b27f17101d1bfb68d14340ce5776a66db88c9cff3a5aca42045c682142e67833"));
var adminDeleteCategory = createServerFn({ method: "POST" }).inputValidator((d) => d).handler(createSsrRpc("214d04b540f7aa67ea3fbd2b2e3c6c59b37a9415a1c3cbba7c19ce8385bfc61b"));
var adminListProducts = createServerFn({ method: "GET" }).handler(createSsrRpc("6a46071ebfd904eb098f71f7d836d4152b62161afda8dc47e4af1d2e760df998"));
var adminSaveProduct = createServerFn({ method: "POST" }).inputValidator((d) => d).handler(createSsrRpc("9a4e906e553836a321f01510c26ee73c4f8169f7ad5837be8d23d8d0f6fb221d"));
var adminDeleteProduct = createServerFn({ method: "POST" }).inputValidator((d) => d).handler(createSsrRpc("9a238fcaae55bdf3bc456b8718230e1ff4a2575e1bd107886cedc11de5edec14"));
var adminListCoupons = createServerFn({ method: "GET" }).handler(createSsrRpc("ad3433bf0e3f90257faef710eec84bf50270e83b2bec34572b047b76d379a75b"));
var adminSaveCoupon = createServerFn({ method: "POST" }).inputValidator((d) => d).handler(createSsrRpc("8e214d75e05948959c0586186992a8dbe7ecb3566a8c1e65cbc7c10a0eaa7d2e"));
var adminDeleteCoupon = createServerFn({ method: "POST" }).inputValidator((d) => d).handler(createSsrRpc("a89b92d44876dcc3d68e4351fbe7507912e13bee6e27d2c546852d053aa821c8"));
var adminListPosts = createServerFn({ method: "GET" }).handler(createSsrRpc("e337755b01a0c73422fa6aa92c7b66663425eab7b5161af6b909b62b56eb089a"));
var adminCreatePost = createServerFn({ method: "POST" }).inputValidator((d) => d).handler(createSsrRpc("dbc1faf9aaabe74f4fb6dbd87fc1f7cedc91e7503b13c475f78fe37efb9ca558"));
var adminDeletePost = createServerFn({ method: "POST" }).inputValidator((d) => d).handler(createSsrRpc("6631b829f747d4a2a680c144d4b0b717baef519568b82eb9b57baf09d459b47c"));
var adminListTestimonials = createServerFn({ method: "GET" }).handler(createSsrRpc("0b44d35687a6fb2ec0198ac5c819920e527406dbf7db54d6449bfcc2172e9697"));
var adminSaveTestimonial = createServerFn({ method: "POST" }).inputValidator((d) => d).handler(createSsrRpc("484070609a7049d23fb5e19e760a6e80474ea43c5a80e2bdf27c3acb9781cee9"));
var adminDeleteTestimonial = createServerFn({ method: "POST" }).inputValidator((d) => d).handler(createSsrRpc("02869b0edf74766f0705bdb258b8550cde65b4f2db70ec043cd97dab28282bac"));
var adminListReels = createServerFn({ method: "GET" }).handler(createSsrRpc("adb12dea86809207c1fd84050d3fb7bec9feeeac8a3e24c6790a81a230bcf231"));
var adminSaveReel = createServerFn({ method: "POST" }).inputValidator((d) => d).handler(createSsrRpc("eb66c4b1c035d4ad029361e1fcb97a09570986ec9430084488be382a21470e3d"));
var adminDeleteReel = createServerFn({ method: "POST" }).inputValidator((d) => d).handler(createSsrRpc("6e86b6d84337b7f4b0ec6ac0f6d62abf3d019a983fad8f30ab05953d1fa01d9e"));
var adminSetMediaActive = createServerFn({ method: "POST" }).inputValidator((d) => d).handler(createSsrRpc("678967ad533f7d1c264b1f3a50b025dc966c3a5c75a6da3a220bddeb587e5b96"));
var adminReorderMedia = createServerFn({ method: "POST" }).inputValidator((d) => d).handler(createSsrRpc("aead6c2545e9ef61648ae60e6ba9dab1ef64dd6d896aaa0054974c4b22f9e793"));
var adminUploadMedia = createServerFn({ method: "POST" }).inputValidator((d) => d).handler(createSsrRpc("a21bd692d08f02192ead80066ad47eb5ce9abd23107c70e432cbba4e8b4ed968"));
var adminOrderCount = createServerFn({ method: "GET" }).handler(createSsrRpc("d122f40577fe876520c18ed0d5bcb3413483d1d5a65834b1039a655b7960e3e7"));
//#endregion
export { adminSaveTestimonial as C, adminUploadMedia as D, adminUpdateOrderStatus as E, useServerFn as O, adminSaveReel as S, adminStatus as T, adminOrderCount as _, adminDeleteProduct as a, adminSaveCoupon as b, adminListCategories as c, adminListPosts as d, adminListProducts as f, adminLogout as g, adminLogin as h, adminDeletePost as i, adminListCoupons as l, adminListTestimonials as m, adminDeleteCategory as n, adminDeleteReel as o, adminListReels as p, adminDeleteCoupon as r, adminDeleteTestimonial as s, adminCreatePost as t, adminListOrders as u, adminReorderMedia as v, adminSetMediaActive as w, adminSaveProduct as x, adminSaveCategory as y };
