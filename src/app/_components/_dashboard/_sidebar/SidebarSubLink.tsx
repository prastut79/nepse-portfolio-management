import Accordion from "@app/_components/_atoms/Accordion";
import React from "react";
import { SidebarLinkButton, SidebarSubLinkButton } from "./SidebarLinkButton";
import { SidebarLinkType } from "./SidebarLinks";
import { BiChevronRight } from "react-icons/bi";

export default function SidebarSubLink({
	label,
	Icon,
	subLinks,
	href,
	isOpen,
}: SidebarLinkType) {
	return (
		<Accordion
			isOpen={isOpen}
			expandClass="sidebar_link_active"
			label={
				<div className="relative ">
					<SidebarLinkButton
						label={label}
						Icon={Icon}
						href={href}
						isMatch={false}
					/>

					<BiChevronRight
						size={19}
						className="sidebar_icon absolute right-2 top-3 bottom-0 "
					/>
				</div>
			}
		>
			<div className="grid w-full gap-2 py-2">
				{subLinks?.map((subLink, i) => (
					<SidebarSubLinkButton key={i} {...subLink} />
				))}
			</div>
		</Accordion>
	);
}
