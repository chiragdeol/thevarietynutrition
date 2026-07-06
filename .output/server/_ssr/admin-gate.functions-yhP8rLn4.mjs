import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { r as useSession$1 } from "./request-response-Bv1MIUlU.mjs";
import { t as createServerRpc } from "./createServerRpc-WJgk8O8C.mjs";
import { Buffer } from "node:buffer";
import process from "node:process";
import { createHash, timingSafeEqual } from "node:crypto";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-gate.functions-yhP8rLn4.js
function sessionConfig() {
	return {
		password: process.env.ADMIN_SESSION_SECRET || "d3b07384d113edec49eaa6238ad5ffd2cd0709d18b1c255e39660ff238c30c0f",
		name: "hn-admin-session",
		maxAge: 3600 * 8,
		cookie: {
			httpOnly: true,
			secure: true,
			sameSite: "lax",
			path: "/"
		}
	};
}
function passwordMatches(input, expected) {
	return timingSafeEqual(createHash("sha256").update(input, "utf8").digest(), createHash("sha256").update(expected, "utf8").digest());
}
async function requireAdmin() {
	const session = await useSession$1(sessionConfig());
	if (!session.data.unlocked) throw new Error("UNAUTHORIZED_ADMIN");
	return session;
}
var adminLogin_createServerFn_handler = createServerRpc({
	id: "1ca092f8ed5dd965560486f3c4105eb4367c442e4307f778525cfae34a35e3d6",
	name: "adminLogin",
	filename: "src/lib/admin-gate.functions.ts"
}, (opts) => adminLogin.__executeServer(opts));
var adminLogin = createServerFn({ method: "POST" }).inputValidator((data) => data).handler(adminLogin_createServerFn_handler, async ({ data }) => {
	const expected = process.env.ADMIN_PASSWORD || "HealthyAdmin@2026";
	if (!expected) return {
		ok: false,
		reason: "Admin password not configured"
	};
	if (!data?.password || typeof data.password !== "string") return {
		ok: false,
		reason: "Password required"
	};
	if (!passwordMatches(data.password, expected)) return {
		ok: false,
		reason: "Incorrect password"
	};
	await (await useSession$1(sessionConfig())).update({
		unlocked: true,
		at: Date.now()
	});
	return { ok: true };
});
var adminLogout_createServerFn_handler = createServerRpc({
	id: "c339090240aeafbb75d5562f2cfa4efb7bbfc80ac48dc900558bf60f43f5f8fa",
	name: "adminLogout",
	filename: "src/lib/admin-gate.functions.ts"
}, (opts) => adminLogout.__executeServer(opts));
var adminLogout = createServerFn({ method: "POST" }).handler(adminLogout_createServerFn_handler, async () => {
	await (await useSession$1(sessionConfig())).clear();
	return { ok: true };
});
var adminStatus_createServerFn_handler = createServerRpc({
	id: "bae7a34e5e57910289a650bdfe18b9fbe1398903680510cce38977c7b790201a",
	name: "adminStatus",
	filename: "src/lib/admin-gate.functions.ts"
}, (opts) => adminStatus.__executeServer(opts));
var adminStatus = createServerFn({ method: "GET" }).handler(adminStatus_createServerFn_handler, async () => {
	return { unlocked: !!(await useSession$1(sessionConfig())).data.unlocked };
});
async function admin() {
	await requireAdmin();
	const { supabaseAdmin } = await import("./client.server-CRe3Mxtu.mjs");
	return supabaseAdmin;
}
var adminListOrders_createServerFn_handler = createServerRpc({
	id: "4b12585d0dc1e8314c61ee1b8a7643a5cc6f5ba441f3df814ec9834dd6205f88",
	name: "adminListOrders",
	filename: "src/lib/admin-gate.functions.ts"
}, (opts) => adminListOrders.__executeServer(opts));
var adminListOrders = createServerFn({ method: "GET" }).handler(adminListOrders_createServerFn_handler, async () => {
	const { data, error } = await (await admin()).from("orders").select("*, order_items(*)").order("created_at", { ascending: false });
	if (error) throw new Error(error.message);
	return data ?? [];
});
var adminUpdateOrderStatus_createServerFn_handler = createServerRpc({
	id: "0ccceceb90dfde2f4c9e62372d354718e6bd5733b4fca2dec9bf8b447a5099cd",
	name: "adminUpdateOrderStatus",
	filename: "src/lib/admin-gate.functions.ts"
}, (opts) => adminUpdateOrderStatus.__executeServer(opts));
var adminUpdateOrderStatus = createServerFn({ method: "POST" }).inputValidator((d) => d).handler(adminUpdateOrderStatus_createServerFn_handler, async ({ data }) => {
	const { error } = await (await admin()).from("orders").update({ status: data.status }).eq("id", data.id);
	if (error) throw new Error(error.message);
	if (data.status === "paid") {
		const { sendOrderPaidNotification } = await import("./notifications.server-DgUQPcvV.mjs");
		sendOrderPaidNotification(data.id).catch((err) => {
			console.error("Failed to send payment confirmation notification:", err);
		});
	}
	return { ok: true };
});
var adminListCategories_createServerFn_handler = createServerRpc({
	id: "70a290071b03bf821bc60bc09c31e4cf4245591b1a29a2819183bb92173faf91",
	name: "adminListCategories",
	filename: "src/lib/admin-gate.functions.ts"
}, (opts) => adminListCategories.__executeServer(opts));
var adminListCategories = createServerFn({ method: "GET" }).handler(adminListCategories_createServerFn_handler, async () => {
	const { data, error } = await (await admin()).from("categories").select("*").order("sort_order");
	if (error) throw new Error(error.message);
	return data ?? [];
});
var adminSaveCategory_createServerFn_handler = createServerRpc({
	id: "b27f17101d1bfb68d14340ce5776a66db88c9cff3a5aca42045c682142e67833",
	name: "adminSaveCategory",
	filename: "src/lib/admin-gate.functions.ts"
}, (opts) => adminSaveCategory.__executeServer(opts));
var adminSaveCategory = createServerFn({ method: "POST" }).inputValidator((d) => d).handler(adminSaveCategory_createServerFn_handler, async ({ data }) => {
	const sb = await admin();
	const { error } = data.id ? await sb.from("categories").update(data.payload).eq("id", data.id) : await sb.from("categories").insert(data.payload);
	if (error) throw new Error(error.message);
	return { ok: true };
});
var adminDeleteCategory_createServerFn_handler = createServerRpc({
	id: "214d04b540f7aa67ea3fbd2b2e3c6c59b37a9415a1c3cbba7c19ce8385bfc61b",
	name: "adminDeleteCategory",
	filename: "src/lib/admin-gate.functions.ts"
}, (opts) => adminDeleteCategory.__executeServer(opts));
var adminDeleteCategory = createServerFn({ method: "POST" }).inputValidator((d) => d).handler(adminDeleteCategory_createServerFn_handler, async ({ data }) => {
	const { error } = await (await admin()).from("categories").delete().eq("id", data.id);
	if (error) throw new Error(error.message);
	return { ok: true };
});
var adminListProducts_createServerFn_handler = createServerRpc({
	id: "6a46071ebfd904eb098f71f7d836d4152b62161afda8dc47e4af1d2e760df998",
	name: "adminListProducts",
	filename: "src/lib/admin-gate.functions.ts"
}, (opts) => adminListProducts.__executeServer(opts));
var adminListProducts = createServerFn({ method: "GET" }).handler(adminListProducts_createServerFn_handler, async () => {
	const { data, error } = await (await admin()).from("products").select("*, categories(name)").order("created_at", { ascending: false });
	if (error) throw new Error(error.message);
	return data ?? [];
});
var adminSaveProduct_createServerFn_handler = createServerRpc({
	id: "9a4e906e553836a321f01510c26ee73c4f8169f7ad5837be8d23d8d0f6fb221d",
	name: "adminSaveProduct",
	filename: "src/lib/admin-gate.functions.ts"
}, (opts) => adminSaveProduct.__executeServer(opts));
var adminSaveProduct = createServerFn({ method: "POST" }).inputValidator((d) => d).handler(adminSaveProduct_createServerFn_handler, async ({ data }) => {
	const sb = await admin();
	const { error } = data.id ? await sb.from("products").update(data.payload).eq("id", data.id) : await sb.from("products").insert(data.payload);
	if (error) throw new Error(error.message);
	return { ok: true };
});
var adminDeleteProduct_createServerFn_handler = createServerRpc({
	id: "9a238fcaae55bdf3bc456b8718230e1ff4a2575e1bd107886cedc11de5edec14",
	name: "adminDeleteProduct",
	filename: "src/lib/admin-gate.functions.ts"
}, (opts) => adminDeleteProduct.__executeServer(opts));
var adminDeleteProduct = createServerFn({ method: "POST" }).inputValidator((d) => d).handler(adminDeleteProduct_createServerFn_handler, async ({ data }) => {
	const { error } = await (await admin()).from("products").delete().eq("id", data.id);
	if (error) throw new Error(error.message);
	return { ok: true };
});
var adminListCoupons_createServerFn_handler = createServerRpc({
	id: "ad3433bf0e3f90257faef710eec84bf50270e83b2bec34572b047b76d379a75b",
	name: "adminListCoupons",
	filename: "src/lib/admin-gate.functions.ts"
}, (opts) => adminListCoupons.__executeServer(opts));
var adminListCoupons = createServerFn({ method: "GET" }).handler(adminListCoupons_createServerFn_handler, async () => {
	const { data, error } = await (await admin()).from("coupons").select("*").order("created_at", { ascending: false });
	if (error) throw new Error(error.message);
	return data ?? [];
});
var adminSaveCoupon_createServerFn_handler = createServerRpc({
	id: "8e214d75e05948959c0586186992a8dbe7ecb3566a8c1e65cbc7c10a0eaa7d2e",
	name: "adminSaveCoupon",
	filename: "src/lib/admin-gate.functions.ts"
}, (opts) => adminSaveCoupon.__executeServer(opts));
var adminSaveCoupon = createServerFn({ method: "POST" }).inputValidator((d) => d).handler(adminSaveCoupon_createServerFn_handler, async ({ data }) => {
	const sb = await admin();
	const { error } = data.id ? await sb.from("coupons").update(data.payload).eq("id", data.id) : await sb.from("coupons").insert(data.payload);
	if (error) throw new Error(error.message);
	return { ok: true };
});
var adminDeleteCoupon_createServerFn_handler = createServerRpc({
	id: "a89b92d44876dcc3d68e4351fbe7507912e13bee6e27d2c546852d053aa821c8",
	name: "adminDeleteCoupon",
	filename: "src/lib/admin-gate.functions.ts"
}, (opts) => adminDeleteCoupon.__executeServer(opts));
var adminDeleteCoupon = createServerFn({ method: "POST" }).inputValidator((d) => d).handler(adminDeleteCoupon_createServerFn_handler, async ({ data }) => {
	const { error } = await (await admin()).from("coupons").delete().eq("id", data.id);
	if (error) throw new Error(error.message);
	return { ok: true };
});
var adminListPosts_createServerFn_handler = createServerRpc({
	id: "e337755b01a0c73422fa6aa92c7b66663425eab7b5161af6b909b62b56eb089a",
	name: "adminListPosts",
	filename: "src/lib/admin-gate.functions.ts"
}, (opts) => adminListPosts.__executeServer(opts));
var adminListPosts = createServerFn({ method: "GET" }).handler(adminListPosts_createServerFn_handler, async () => {
	const { data, error } = await (await admin()).from("blog_posts").select("*").order("created_at", { ascending: false });
	if (error) throw new Error(error.message);
	return data ?? [];
});
var adminCreatePost_createServerFn_handler = createServerRpc({
	id: "dbc1faf9aaabe74f4fb6dbd87fc1f7cedc91e7503b13c475f78fe37efb9ca558",
	name: "adminCreatePost",
	filename: "src/lib/admin-gate.functions.ts"
}, (opts) => adminCreatePost.__executeServer(opts));
var adminCreatePost = createServerFn({ method: "POST" }).inputValidator((d) => d).handler(adminCreatePost_createServerFn_handler, async ({ data }) => {
	const { error } = await (await admin()).from("blog_posts").insert(data.payload);
	if (error) throw new Error(error.message);
	return { ok: true };
});
var adminDeletePost_createServerFn_handler = createServerRpc({
	id: "6631b829f747d4a2a680c144d4b0b717baef519568b82eb9b57baf09d459b47c",
	name: "adminDeletePost",
	filename: "src/lib/admin-gate.functions.ts"
}, (opts) => adminDeletePost.__executeServer(opts));
var adminDeletePost = createServerFn({ method: "POST" }).inputValidator((d) => d).handler(adminDeletePost_createServerFn_handler, async ({ data }) => {
	const { error } = await (await admin()).from("blog_posts").delete().eq("id", data.id);
	if (error) throw new Error(error.message);
	return { ok: true };
});
var adminListTestimonials_createServerFn_handler = createServerRpc({
	id: "0b44d35687a6fb2ec0198ac5c819920e527406dbf7db54d6449bfcc2172e9697",
	name: "adminListTestimonials",
	filename: "src/lib/admin-gate.functions.ts"
}, (opts) => adminListTestimonials.__executeServer(opts));
var adminListTestimonials = createServerFn({ method: "GET" }).handler(adminListTestimonials_createServerFn_handler, async () => {
	const { data, error } = await (await admin()).from("testimonials").select("*").order("sort_order");
	if (error) throw new Error(error.message);
	return data ?? [];
});
var adminSaveTestimonial_createServerFn_handler = createServerRpc({
	id: "484070609a7049d23fb5e19e760a6e80474ea43c5a80e2bdf27c3acb9781cee9",
	name: "adminSaveTestimonial",
	filename: "src/lib/admin-gate.functions.ts"
}, (opts) => adminSaveTestimonial.__executeServer(opts));
var adminSaveTestimonial = createServerFn({ method: "POST" }).inputValidator((d) => d).handler(adminSaveTestimonial_createServerFn_handler, async ({ data }) => {
	const sb = await admin();
	const { error } = data.id ? await sb.from("testimonials").update(data.payload).eq("id", data.id) : await sb.from("testimonials").insert(data.payload);
	if (error) throw new Error(error.message);
	return { ok: true };
});
var adminDeleteTestimonial_createServerFn_handler = createServerRpc({
	id: "02869b0edf74766f0705bdb258b8550cde65b4f2db70ec043cd97dab28282bac",
	name: "adminDeleteTestimonial",
	filename: "src/lib/admin-gate.functions.ts"
}, (opts) => adminDeleteTestimonial.__executeServer(opts));
var adminDeleteTestimonial = createServerFn({ method: "POST" }).inputValidator((d) => d).handler(adminDeleteTestimonial_createServerFn_handler, async ({ data }) => {
	const { error } = await (await admin()).from("testimonials").delete().eq("id", data.id);
	if (error) throw new Error(error.message);
	return { ok: true };
});
var adminListReels_createServerFn_handler = createServerRpc({
	id: "adb12dea86809207c1fd84050d3fb7bec9feeeac8a3e24c6790a81a230bcf231",
	name: "adminListReels",
	filename: "src/lib/admin-gate.functions.ts"
}, (opts) => adminListReels.__executeServer(opts));
var adminListReels = createServerFn({ method: "GET" }).handler(adminListReels_createServerFn_handler, async () => {
	const { data, error } = await (await admin()).from("reels").select("*").order("sort_order");
	if (error) throw new Error(error.message);
	return data ?? [];
});
var adminSaveReel_createServerFn_handler = createServerRpc({
	id: "eb66c4b1c035d4ad029361e1fcb97a09570986ec9430084488be382a21470e3d",
	name: "adminSaveReel",
	filename: "src/lib/admin-gate.functions.ts"
}, (opts) => adminSaveReel.__executeServer(opts));
var adminSaveReel = createServerFn({ method: "POST" }).inputValidator((d) => d).handler(adminSaveReel_createServerFn_handler, async ({ data }) => {
	const sb = await admin();
	const { error } = data.id ? await sb.from("reels").update(data.payload).eq("id", data.id) : await sb.from("reels").insert(data.payload);
	if (error) throw new Error(error.message);
	return { ok: true };
});
var adminDeleteReel_createServerFn_handler = createServerRpc({
	id: "6e86b6d84337b7f4b0ec6ac0f6d62abf3d019a983fad8f30ab05953d1fa01d9e",
	name: "adminDeleteReel",
	filename: "src/lib/admin-gate.functions.ts"
}, (opts) => adminDeleteReel.__executeServer(opts));
var adminDeleteReel = createServerFn({ method: "POST" }).inputValidator((d) => d).handler(adminDeleteReel_createServerFn_handler, async ({ data }) => {
	const { error } = await (await admin()).from("reels").delete().eq("id", data.id);
	if (error) throw new Error(error.message);
	return { ok: true };
});
var adminSetMediaActive_createServerFn_handler = createServerRpc({
	id: "678967ad533f7d1c264b1f3a50b025dc966c3a5c75a6da3a220bddeb587e5b96",
	name: "adminSetMediaActive",
	filename: "src/lib/admin-gate.functions.ts"
}, (opts) => adminSetMediaActive.__executeServer(opts));
var adminSetMediaActive = createServerFn({ method: "POST" }).inputValidator((d) => d).handler(adminSetMediaActive_createServerFn_handler, async ({ data }) => {
	const { error } = await (await admin()).from(data.table).update({ active: data.active }).eq("id", data.id);
	if (error) throw new Error(error.message);
	return { ok: true };
});
var adminReorderMedia_createServerFn_handler = createServerRpc({
	id: "aead6c2545e9ef61648ae60e6ba9dab1ef64dd6d896aaa0054974c4b22f9e793",
	name: "adminReorderMedia",
	filename: "src/lib/admin-gate.functions.ts"
}, (opts) => adminReorderMedia.__executeServer(opts));
var adminReorderMedia = createServerFn({ method: "POST" }).inputValidator((d) => d).handler(adminReorderMedia_createServerFn_handler, async ({ data }) => {
	const sb = await admin();
	const { data: rows, error: e1 } = await sb.from(data.table).select("id, sort_order").order("sort_order", { ascending: true });
	if (e1) throw new Error(e1.message);
	const list = rows ?? [];
	const idx = list.findIndex((r) => r.id === data.id);
	if (idx === -1) throw new Error("Not found");
	const swapIdx = data.direction === "up" ? idx - 1 : idx + 1;
	if (swapIdx < 0 || swapIdx >= list.length) return {
		ok: true,
		noop: true
	};
	const a = list[idx];
	const b = list[swapIdx];
	const aOrder = a.sort_order;
	const bOrder = b.sort_order === aOrder ? aOrder + (data.direction === "up" ? -1 : 1) : b.sort_order;
	const { error: e2 } = await sb.from(data.table).update({ sort_order: bOrder }).eq("id", a.id);
	if (e2) throw new Error(e2.message);
	const { error: e3 } = await sb.from(data.table).update({ sort_order: aOrder }).eq("id", b.id);
	if (e3) throw new Error(e3.message);
	return { ok: true };
});
var adminUploadMedia_createServerFn_handler = createServerRpc({
	id: "a21bd692d08f02192ead80066ad47eb5ce9abd23107c70e432cbba4e8b4ed968",
	name: "adminUploadMedia",
	filename: "src/lib/admin-gate.functions.ts"
}, (opts) => adminUploadMedia.__executeServer(opts));
var adminUploadMedia = createServerFn({ method: "POST" }).inputValidator((d) => d).handler(adminUploadMedia_createServerFn_handler, async ({ data }) => {
	await requireAdmin();
	const { supabaseAdmin } = await import("./client.server-CRe3Mxtu.mjs");
	const { data: buckets } = await supabaseAdmin.storage.listBuckets();
	if (!buckets?.find((b) => b.name === "media")) await supabaseAdmin.storage.createBucket("media", { public: true });
	const safe = data.filename.replace(/[^a-zA-Z0-9._-]/g, "_");
	const path = `${Date.now()}-${safe}`;
	const buffer = Buffer.from(data.dataBase64, "base64");
	const { error } = await supabaseAdmin.storage.from("media").upload(path, buffer, {
		contentType: data.contentType,
		upsert: false
	});
	if (error) throw new Error(error.message);
	const { data: pub } = supabaseAdmin.storage.from("media").getPublicUrl(path);
	return { url: pub.publicUrl };
});
var adminOrderCount_createServerFn_handler = createServerRpc({
	id: "d122f40577fe876520c18ed0d5bcb3413483d1d5a65834b1039a655b7960e3e7",
	name: "adminOrderCount",
	filename: "src/lib/admin-gate.functions.ts"
}, (opts) => adminOrderCount.__executeServer(opts));
var adminOrderCount = createServerFn({ method: "GET" }).handler(adminOrderCount_createServerFn_handler, async () => {
	const { count, error } = await (await admin()).from("orders").select("id", {
		count: "exact",
		head: true
	});
	if (error) throw new Error(error.message);
	return { count: count ?? 0 };
});
var adminListTempImages_createServerFn_handler = createServerRpc({
	id: "8d7530627dbe02c207c6517cda50ec821daf95dbfe8b42a3d9a988f63356a7f0",
	name: "adminListTempImages",
	filename: "src/lib/admin-gate.functions.ts"
}, (opts) => adminListTempImages.__executeServer(opts));
var adminListTempImages = createServerFn({ method: "GET" }).handler(adminListTempImages_createServerFn_handler, async () => {
	await requireAdmin();
	const fs = await import("node:fs");
	const dirPath = (await import("node:path")).join(process.cwd(), "public/images/temp_uploads");
	if (!fs.existsSync(dirPath)) return [];
	return fs.readdirSync(dirPath).filter((f) => /\.(png|jpg|jpeg)$/i.test(f));
});
var adminMapTempImage_createServerFn_handler = createServerRpc({
	id: "ccdba02ed42fb47eab92077cca5025b3f4524908690fc4f96a544ac5d95a2d4b",
	name: "adminMapTempImage",
	filename: "src/lib/admin-gate.functions.ts"
}, (opts) => adminMapTempImage.__executeServer(opts));
var adminMapTempImage = createServerFn({ method: "POST" }).inputValidator((d) => d).handler(adminMapTempImage_createServerFn_handler, async ({ data }) => {
	await requireAdmin();
	const fs = await import("node:fs");
	const path = await import("node:path");
	const { supabaseAdmin } = await import("./client.server-CRe3Mxtu.mjs");
	const { data: product, error: pErr } = await supabaseAdmin.from("products").select("slug").eq("id", data.productId).single();
	if (pErr || !product) throw new Error("Product not found");
	const ext = path.extname(data.filename) || ".png";
	const newFilename = `${product.slug}${ext}`;
	const srcPath = path.join(process.cwd(), "public/images/temp_uploads", data.filename);
	const destDir = path.join(process.cwd(), "public/images/products");
	const destPath = path.join(destDir, newFilename);
	if (!fs.existsSync(srcPath)) throw new Error("Source image not found");
	if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
	fs.copyFileSync(srcPath, destPath);
	const dbUrl = `/images/products/${newFilename}`;
	const { error: uErr } = await supabaseAdmin.from("products").update({ image_url: dbUrl }).eq("id", data.productId);
	if (uErr) throw new Error(`Database Update Error: ${uErr.message}`);
	try {
		fs.unlinkSync(srcPath);
	} catch (e) {
		console.error("Failed to delete temp file:", e);
	}
	return {
		success: true,
		url: dbUrl
	};
});
var adminTestSMTPSend_createServerFn_handler = createServerRpc({
	id: "5bd9f8bff78de780c1900d02fdb052e26b9d9b166513234ecea52bdb22e8bbae",
	name: "adminTestSMTPSend",
	filename: "src/lib/admin-gate.functions.ts"
}, (opts) => adminTestSMTPSend.__executeServer(opts));
var adminTestSMTPSend = createServerFn({ method: "POST" }).handler(adminTestSMTPSend_createServerFn_handler, async () => {
	try {
		const { transporter, smtpUser } = await import("./notifications.server-DgUQPcvV.mjs");
		const host = (process.env.CUSTOMER_SMTP_HOST || "smtp.hostinger.com").trim();
		const port = (process.env.CUSTOMER_SMTP_PORT || "465").trim();
		const envPass = process.env.CUSTOMER_SMTP_PASS;
		const trimmedPass = envPass ? envPass.trim() : "";
		const hasWhitespace = envPass ? envPass !== trimmedPass : false;
		try {
			await new Promise((resolve, reject) => {
				transporter.verify((error) => {
					if (error) reject(error);
					else resolve();
				});
			});
		} catch (err) {
			throw new Error(`${err.message || err}\n\n[Diagnostics Info]\nSender User: ${smtpUser}\nHost: ${host}\nPort: ${port}\nCUSTOMER_SMTP_PASS env set: ${envPass ? "Yes" : "No"}\nOriginal length: ${envPass ? envPass.length : 0}\nTrimmed length: ${trimmedPass.length}\nHas hidden spaces/newlines: ${hasWhitespace ? "Yes" : "No"}`);
		}
		await transporter.sendMail({
			from: `"The Variety Nutrition Test" <${smtpUser}>`,
			to: "cdeol48@gmail.com",
			subject: "SMTP Connection Test Success",
			text: "Congratulations! Your Hostinger SMTP email connection is configured correctly and working fine."
		});
		return {
			success: true,
			message: `SMTP connection verified! Test email sent successfully from ${smtpUser}.`
		};
	} catch (e) {
		console.error("SMTP Test Error:", e);
		return {
			success: false,
			error: e.message || String(e)
		};
	}
});
//#endregion
export { adminCreatePost_createServerFn_handler, adminDeleteCategory_createServerFn_handler, adminDeleteCoupon_createServerFn_handler, adminDeletePost_createServerFn_handler, adminDeleteProduct_createServerFn_handler, adminDeleteReel_createServerFn_handler, adminDeleteTestimonial_createServerFn_handler, adminListCategories_createServerFn_handler, adminListCoupons_createServerFn_handler, adminListOrders_createServerFn_handler, adminListPosts_createServerFn_handler, adminListProducts_createServerFn_handler, adminListReels_createServerFn_handler, adminListTempImages_createServerFn_handler, adminListTestimonials_createServerFn_handler, adminLogin_createServerFn_handler, adminLogout_createServerFn_handler, adminMapTempImage_createServerFn_handler, adminOrderCount_createServerFn_handler, adminReorderMedia_createServerFn_handler, adminSaveCategory_createServerFn_handler, adminSaveCoupon_createServerFn_handler, adminSaveProduct_createServerFn_handler, adminSaveReel_createServerFn_handler, adminSaveTestimonial_createServerFn_handler, adminSetMediaActive_createServerFn_handler, adminStatus_createServerFn_handler, adminTestSMTPSend_createServerFn_handler, adminUpdateOrderStatus_createServerFn_handler, adminUploadMedia_createServerFn_handler };
