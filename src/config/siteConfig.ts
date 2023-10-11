import { BreadcrumbsType } from "@app/_components/_atoms/Breadcrumbs";

export interface SiteConfigType {
	label: string;
	href: string;
}

export const P_DASHBOARD: SiteConfigType = {
	label: "Dashboard",
	href: "/dashboard",
};

export const P_USER: SiteConfigType = {
	label: "User",
	href: P_DASHBOARD.href + "/user",
};

export const P_TRANSACTION = {
	label: "Transaction",
	href: P_DASHBOARD.href + "/transaction",
};
export const P_TRANSACTION_LIST = { ...P_TRANSACTION, label: "List" };

export const P_TRANSACTION_ADD = {
	label: "Add",
	href: P_TRANSACTION.href + "/add",
};

export const P_TRANSACTION_EDIT = {
	label: "Transaction",
	href: P_DASHBOARD.href + "/transaction",
};
