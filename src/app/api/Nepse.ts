import { parseResponse } from "@utils/Api";
import https from "https";
import fetch, { RequestInit } from "node-fetch";

export const nepsePath = {
	live: { path: "/api/nots/graph/index/58", body: { id: 1157102 } },
	index: { path: "/api/nots/nepse-index" },
	subIndex: { path: "/api/nots" },
	marketStatus: { path: "/api/nots/nepse-data/market-open" },
	summary: { path: "/api/nots/market-summary/" },
};
const NEPSE_BASE = "https://www.nepalstock.com.np";

export class Nepse {
	agent = new https.Agent({
		rejectUnauthorized: false,
		keepAlive: false,
	});

	token: { access: string; refresh: string } = { access: "", refresh: "" };

	header: Headers = new Headers({
		"content-type": "application/json",
		Host: "nepalstock.com.np",
		"User-Agent":
			"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:89.0) Gecko/20100101 Firefox/89.0",
		Accept: "application/json, text/plain, */*",
		"Accept-Language": "en-US,en;q=0.5",
		"Accept-Encoding": "gzip, deflate, br",
		Connection: "keep-alive",
		"Content-Type": "application/json",
		Referer: "https://www.nepalstock.com.np/",
		Pragma: "no-cache",
		"Cache-Control": "no-cache",
		TE: "Trailers",
		"Access-Control-Allow-Origin": "*",
		vary: "Origin",
	});

	isBinaryLoaded: boolean = false;
	cdx: any;
	rdx: any;
	bdx: any;
	ndx: any;
	mdx: any;
	salts: any;
	payloadId = 0;

	async getParser() {
		if (!this.isBinaryLoaded) {
			await fetch(NEPSE_BASE + "/assets/prod/css.wasm", {
				headers: this.header,
				agent: this.agent,
			})
				.then((t) => {
					console.log(t);
					return t.arrayBuffer();
				})
				.then((t) => WebAssembly.instantiate(t))
				.then((t: any) => {
					this.cdx = t.instance.exports.cdx as CallableFunction;
					this.rdx = t.instance.exports.rdx as CallableFunction;
					this.bdx = t.instance.exports.bdx as CallableFunction;
					this.ndx = t.instance.exports.ndx as CallableFunction;
					this.mdx = t.instance.exports.mdx as CallableFunction;
				});
			this.isBinaryLoaded = true;
		}
	}

	getOption(body?: RequestInit) {
		var options: RequestInit = {
			method: "GET",
			headers: this.header,
			agent: this.agent,
		};

		if (body) {
			options = {
				...options,
				method: "POST",
				body: JSON.stringify(body),
			};
		}
		return options;
	}

	async getToken() {
		try {
			await this.getParser();
		} catch (error) {
			console.log(error);
		}

		const res = await this.request({ path: "/api/authenticate/prove" });

		const e: any = res.data;

		this.salts = [e.salt1, e.salt2, e.salt3, e.salt4, e.salt5];

		const n = this.cdx(e.salt1, e.salt2, e.salt3, e.salt4, e.salt5),
			l = this.rdx(e.salt1, e.salt2, e.salt4, e.salt3, e.salt5),
			i = this.bdx(e.salt1, e.salt2, e.salt4, e.salt3, e.salt5),
			r = this.ndx(e.salt1, e.salt2, e.salt4, e.salt3, e.salt5),
			t = this.mdx(e.salt1, e.salt2, e.salt4, e.salt3, e.salt5);

		const v = this.cdx(e.salt2, e.salt1, e.salt3, e.salt5, e.salt4),
			w = this.rdx(e.salt2, e.salt1, e.salt3, e.salt4, e.salt5),
			x = this.bdx(e.salt2, e.salt1, e.salt4, e.salt3, e.salt5),
			y = this.ndx(e.salt2, e.salt1, e.salt4, e.salt3, e.salt5),
			z = this.mdx(e.salt2, e.salt1, e.salt4, e.salt3, e.salt5);

		const tokens = {
			access:
				e.accessToken.slice(0, n) +
				e.accessToken.slice(n + 1, l) +
				e.accessToken.slice(l + 1, i) +
				e.accessToken.slice(i + 1, r) +
				e.accessToken.slice(r + 1, t) +
				e.accessToken.slice(t + 1),
			refresh:
				e.refreshToken.slice(0, v) +
				e.refreshToken.slice(v + 1, w) +
				e.refreshToken.slice(w + 1, x) +
				e.refreshToken.slice(x + 1, y) +
				e.refreshToken.slice(y + 1, z) +
				e.refreshToken.slice(z + 1),
		};
		this.token = tokens;
		this.header.set("Authorization", `Salter ${tokens.access}`);
	}

	async request({ path, body }: { path: string; body?: RequestInit }) {
		var res;
		try {
			console.log("nepsepath: ", NEPSE_BASE + path);
			res = await fetch(NEPSE_BASE + path, this.getOption(body));

			if (res.status === 401) {
				await this.getToken();
				res = await fetch(NEPSE_BASE + path, this.getOption(body));
			}
			if (res.ok) {
				const data = await res.json();

				return { data, status: res.status };
			} else {
				return { error: true, status: res.status };
			}
			// return parseResponse(res as any);
			// const data = await res.json();
			// return { data, status: res.status };
		} catch (e) {
			let error = "Error Occured";

			if (e instanceof Error) {
				error = `${e.name}: ${e.message}`;
			}

			return {
				error: true,
				message: error,
				status: res?.status || 500,
			};
		}
	}

	async getPayloadId() {}
}
