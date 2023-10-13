import { IconType } from "react-icons";

import { TfiDashboard } from "react-icons/tfi";
import { BiSolidUserRectangle } from "react-icons/bi";
import { TbHanger } from "react-icons/tb";
import {
	P_DASHBOARD,
	P_STOCK,
	P_TRANSACTION,
	P_TRANSACTION_ADD,
	P_TRANSACTION_LIST,
} from "@config/siteConfig";
import { RiStockFill } from "react-icons/ri";
import { AiOutlineStock } from "react-icons/ai";

export interface SidebarButtonGroupType {
	label: string;
	links: SidebarLinkType[];
}
export interface SidebarLinkType {
	label: string;
	href?: string;
	Icon: IconType;
	subLinks?: SidebarSubLinkType[];
	isOpen?: boolean;
}
export interface SidebarSubLinkType {
	label: string;
	href: string;
}
export const SIDEBAR_RESIZE_CUTOFF = 1024;
export const SIDEBAR_MENU_ID = "res-sidebar";

export const SIDEBAR_BUTTON: SidebarButtonGroupType[] = [
	{
		label: "OVERVIEW",
		links: [
			{
				...P_DASHBOARD,
				// Icon: TfiDashboard,
				Icon: AiOutlineStock,
			},
		],
	},
	{
		label: "MANAGEMENT",
		links: [
			{
				label: "Transaction",
				Icon: TbHanger,
				href: P_TRANSACTION.href,
				subLinks: [P_TRANSACTION_LIST, P_TRANSACTION_ADD],
				isOpen: true,
			},
		],
	},
	{
		label: "ADMIN",
		links: [
			{ ...P_STOCK, Icon: RiStockFill },
			{
				label: "User",
				Icon: BiSolidUserRectangle,
				href: "/user",
				subLinks: [
					{
						label: "Profile",
						href: "/s",
					},
					{
						label: "Cards",
						href: "/me",
					},
					{
						label: "List",
						href: "/dashboard",
					},
					{
						label: "Create",
						href: "/me",
					},
					{
						label: "Edit",
						href: "/me",
					},
					{
						label: "Account",
						href: "/me",
					},
				],
			},
		],
	},
];
