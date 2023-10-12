"use client";

import Link from "next/link";
import { IconType } from "react-icons";
import { SidebarLinkType, SidebarSubLinkType } from "./SidebarLinks";
import { usePathname } from "next/navigation";

interface SidebarLinkButtonType extends SidebarLinkType {
	isMatch?: boolean;
}
export function SidebarLinkButton({
	label,
	Icon,
	href,
	isMatch = true,
}: SidebarLinkButtonType) {
	const pathname = usePathname();
	const isActive = isMatch ? pathname === href! : pathname.startsWith(href!);
	return (
		<div
			className={`sidebar_link px-3 py-[10px] rounded transition fc_x gap-4  ${
				isActive ? "!bg-theme/[.08] !text-theme" : "hover:bg-bs"
			}`}
		>
			<Icon size={24} />
			<span>{label}</span>
		</div>
	);
}

export function SidebarSubLinkButton({ label, href }: SidebarSubLinkType) {
	const isActive = usePathname().startsWith(href);
	return (
		<Link href={href}>
			<div
				className={` fc_x gap-4 px-3 py-2 rounded transition hover:bg-bs ${
					isActive ? "text-theme " : ""
				}`}
			>
				<span
					className={`w-6 fc_y mb-1 leading-0 ${
						isActive ? "text-3xl " : "text-base "
					}`}
				>
					&bull;
				</span>
				<span>{label}</span>
			</div>
		</Link>
	);
}
