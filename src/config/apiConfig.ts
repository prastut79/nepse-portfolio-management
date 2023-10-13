export const PROD_PATH = process.env.PROD_PATH || "https://www.prastut.com.np";

export const API_BASE =
	process.env.NODE_ENV === "development"
		? "http://localhost:3000"
		: PROD_PATH;

export const API_SITEMAP = API_BASE + "/api/sitemap";

export const API_STOCK = API_BASE + "/api/stock";

export const API_STOCK_UPDATE = API_BASE + "/api/stock/update";

export const API_TRANSACTION = API_BASE + "/api/transaction";
