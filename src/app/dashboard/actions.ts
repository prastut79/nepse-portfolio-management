import { API_STOCK } from "@config/apiConfig";
import { StockType } from "@schema/stockSchema";
import { parseResponse } from "@utils/Api";

export function getAllStocks() {
	const req = fetch(API_STOCK, { next: { tags: ["stocks"] } });
	return parseResponse<{ stocks: StockType[] }>(req);
}
