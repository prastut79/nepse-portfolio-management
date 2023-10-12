import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import { MdDarkMode } from "react-icons/md";
import { SIDEBAR_MENU_ID } from "../_dashboard/_sidebar/SidebarLinks";
import ThemeSwitch from "./ThemeSwitch";

export default function Navbar() {
	return (
		<header className="fixed w-full 2lg:w-[calc(100%_-_281px)] top-0 h-16 right-0 justify-between px-3  md:px-8 py-6 backdrop-blur-sm bg-bp/80 fc_x z-40">
			<div className="fc_x gap-x-3">
				<div id={SIDEBAR_MENU_ID} className="2lg:hidden" />
				<button className="text-ts bc_x">
					<BiSearch size={20} />
				</button>
			</div>
			<div className="fc_x gap-x-3">
				<ThemeSwitch />
				<Image
					src="/static/images/avatar_placeholder.jpg"
					height={32}
					width={32}
					alt="profile-image"
					className="rounded-full"
				/>
			</div>
		</header>
	);
}
