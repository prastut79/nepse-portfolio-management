import { IconType } from "react-icons";

import { TfiDashboard } from "react-icons/tfi";
import { BiSolidUserRectangle } from "react-icons/bi";
import { TbHanger } from "react-icons/tb";

export interface SidebarButtonGroupType {
	label: string;
	links: SidebarLinkType[];
}
export interface SidebarLinkType {
	label: string;
	to?: string;
	Icon: IconType;
	basePath?: string;
	subLinks?: SidebarSubLinkType[];
}
export interface SidebarSubLinkType {
	label: string;
	to: string;
}
export const SIDEBAR_RESIZE_CUTOFF = 1024;
export const SIDEBAR_MENU_ID = "res-sidebar";

export const SIDEBAR_BUTTON: SidebarButtonGroupType[] = [
	{
		label: "OVERVIEW",
		links: [
			{
				label: "App",
				to: "/me",
				Icon: TfiDashboard,
			},
			{
				label: "E-Commerce",
				to: "/me",
				Icon: TfiDashboard,
			},
			{
				label: "Analytics",
				to: "/me",
				Icon: TfiDashboard,
			},
			{
				label: "Banking",
				to: "/me",
				Icon: TfiDashboard,
			},
		],
	},
	{
		label: "ADMIN",
		links: [
			{
				label: "User",
				Icon: BiSolidUserRectangle,
				basePath: "",
				subLinks: [
					{
						label: "Profile",
						to: "/me",
					},
					{
						label: "Cards",
						to: "/me",
					},
					{
						label: "List",
						to: "/me",
					},
					{
						label: "Create",
						to: "/me",
					},
					{
						label: "Edit",
						to: "/me",
					},
					{
						label: "Account",
						to: "/me",
					},
				],
			},
			{
				label: "Transaction",
				Icon: TbHanger,
				subLinks: [
					{
						label: "List",
						to: "/me",
					},
					{
						label: "Add",
						to: "/me",
					},
				],
			},
		],
	},
];
