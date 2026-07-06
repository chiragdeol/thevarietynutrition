import { n as __toESM } from "../_runtime.mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as Button } from "./button-BpE9Czok.mjs";
import { L as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as useServerFn, D as adminStatus, g as adminLogin } from "./admin-gate.functions-BTQhrTSR.mjs";
import { t as Input } from "./input-NvmijQlt.mjs";
import { t as Label } from "./label-AutfcB-T.mjs";
import { D as Lock } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-login-DpVU0zP1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminLoginPage() {
	const router = useRouter();
	const login = useServerFn(adminLogin);
	const status = useServerFn(adminStatus);
	const [password, setPassword] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		status({}).then((s) => {
			if (s.unlocked) router.navigate({ to: "/admin" });
		});
	}, []);
	async function onSubmit(e) {
		e.preventDefault();
		setLoading(true);
		setError(null);
		const res = await login({ data: { password } });
		setLoading(false);
		if (res.ok) await router.navigate({ to: "/admin" });
		else setError(res.reason ?? "Login failed");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary/40 to-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md bg-card border border-border rounded-2xl shadow-lg p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center text-center mb-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "w-7 h-7 text-primary" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-serif text-3xl text-primary",
							children: "Admin Access"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground mt-1",
							children: "Enter the admin password to manage the store."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "password",
							children: "Password"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "password",
							type: "password",
							autoComplete: "current-password",
							value: password,
							onChange: (e) => setPassword(e.target.value),
							placeholder: "Enter admin password",
							required: true,
							autoFocus: true
						})] }),
						error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm text-destructive bg-destructive/10 rounded-md px-3 py-2",
							children: error
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: loading,
							className: "w-full bg-primary text-primary-foreground",
							children: loading ? "Signing in…" : "Sign in to Admin"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground text-center mt-6",
					children: "This area is restricted. All actions are logged."
				})
			]
		})
	});
}
//#endregion
export { AdminLoginPage as component };
