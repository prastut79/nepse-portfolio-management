import https from "https";
import fetch, { RequestInit } from "node-fetch";
import { parseResponse } from "./Api";

// export function getCompanyList() {
// 	const req = fetch(API_NEPSE_MS_COMPANYLIST, { cache: "no-store" });
// 	return parseResponse(req);
// }

export function fetchWithAgent(url: string, options?: RequestInit) {
	const agent = new https.Agent({
		rejectUnauthorized: false,
		keepAlive: false,
	});
	return parseResponse(
		fetch(url, {
			...options,
			agent,
		}) as any
	);
}
