type SiteConfigTypeBase = { label: string; href: string };
export interface SiteConfigType extends SiteConfigTypeBase {
	breadcrumbs?: SiteConfigTypeBase[];
}

export const P_LOGIN = {
	label: "Sign In",
	href: "/auth/login",
};

export const P_DASHBOARD: SiteConfigType = {
	label: "Overview",
	href: "/dashboard",
};

export const P_USER: SiteConfigType = {
	label: "User",
	href: P_DASHBOARD.href + "/user",
};
P_USER.breadcrumbs = [P_DASHBOARD, P_USER];

export const P_TRANSACTION: SiteConfigType = {
	label: "Transaction",
	href: P_DASHBOARD.href + "/transaction",
};

export const P_TRANSACTION_LIST: SiteConfigType = {
	...P_TRANSACTION,
	label: "List",
};
P_TRANSACTION.breadcrumbs = [P_DASHBOARD, P_TRANSACTION, P_TRANSACTION_LIST];

export const P_TRANSACTION_ADD: SiteConfigType = {
	label: "Add",
	href: P_TRANSACTION.href + "/add",
};
P_TRANSACTION_ADD.breadcrumbs = [P_DASHBOARD, P_TRANSACTION, P_TRANSACTION_ADD];

export const P_TRANSACTION_EDIT = {
	label: "Transaction",
	href: P_DASHBOARD.href + "/transaction",
};

const P_ADMIN_DASHBOARD = { href: P_DASHBOARD.href + "/admin" };

export const P_STOCK: SiteConfigType = {
	label: "Stocks",
	href: P_ADMIN_DASHBOARD.href + "/stock",
};
P_STOCK.breadcrumbs = [P_DASHBOARD, P_STOCK];
