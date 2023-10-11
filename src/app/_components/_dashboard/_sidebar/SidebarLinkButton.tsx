"use client";

import { IconType } from "react-icons";

export function SidebarLinkButton({
	label,
	Icon,
}: {
	label: string;
	Icon: IconType;
}) {
	return (
		<div className="sidebar_link px-3 py-[10px] rounded transition  fc_x gap-4 hover:bg-bs ">
			<Icon size={24} />
			{}
			<span className="">{label}</span>
		</div>
	);
}

export function SidebarSubLinkButton({ label }: { label: string }) {
	return (
		<div className=" fc_x gap-4 px-3 py-2 rounded transition hover:bg-bs ">
			<span className="w-6 fc_xy text-theme">&bull;</span>
			<span>{label}</span>
		</div>
	);
}
