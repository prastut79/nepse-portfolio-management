import { IconType } from "react-icons";

import { TfiDashboard } from "react-icons/tfi";
import { BiSolidUserRectangle } from "react-icons/bi";
import { TbHanger } from "react-icons/tb";
import {
	P_TRANSACTION,
	P_TRANSACTION_ADD,
	P_TRANSACTION_LIST,
} from "@config/siteConfig";

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
				label: "App",
				href: "/dashboard",
				Icon: TfiDashboard,
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
