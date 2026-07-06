import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as createSsrRpc } from "./createSsrRpc-CfAXV5WT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/order._id-BWCu1qzW.js
var $$splitComponentImporter = () => import("./order._id-DEGT1VGF.mjs");
var getOrderDetails = createServerFn({ method: "GET" }).inputValidator((id) => id).handler(createSsrRpc("a0208755e4d9d7f4634cae565924d5625084137032c1f661523ca9068ee95841"));
var submitOrderPayment = createServerFn({ method: "POST" }).inputValidator((d) => d).handler(createSsrRpc("d5d4b3bd50b0c8865c953a8f7c9299b1def85d505552023b296456133470b7ed"));
var Route = createFileRoute("/order/$id")({
	head: () => ({ meta: [{ title: "Order Details — The Variety Nutrition" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { getOrderDetails as n, submitOrderPayment as r, Route as t };
