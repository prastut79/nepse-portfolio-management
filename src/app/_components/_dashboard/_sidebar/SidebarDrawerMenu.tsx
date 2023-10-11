"use cient";

import { createPortal } from "react-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { SIDEBAR_MENU_ID } from "./SidebarLinks";

export default function SidebarMenu({
	setIsOpen,
}: {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	const menuDiv = document.getElementById(SIDEBAR_MENU_ID);

	if (!menuDiv) return <></>;

	return createPortal(
		<button
			onClick={() => setIsOpen(true)}
			className="text-ts hover:text-tp bc_x 2lg:hidden"
		>
			<HiMenuAlt3 size={18} />
		</button>,
		menuDiv
	);
}
