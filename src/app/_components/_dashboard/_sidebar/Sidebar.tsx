"use client";

import React, { useMemo, useState } from "react";
import { SIDEBAR_BUTTON } from "./SidebarLinks";
import Link from "next/link";
import Accordion from "@app/_components/_atoms/Accordion";
import { SidebarLinkButton } from "./SidebarLinkButton";
import SidebarSubLink from "./SidebarSubLink";

import Drawer from "@app/_components/_atoms/Drawer/Drawer";
import dynamic from "next/dynamic";
import SiteLogo from "./SiteLogo";

const SidebarDrawerMenu = dynamic(() => import("./SidebarDrawerMenu"), {
	ssr: false,
});

export default function Sidebar() {
	const [isOpen, setIsOpen] = useState(false);

	const SideBarButtons = useMemo(
		() => (
			<>
				<SidebarLogo />
				<div className="text-ts grid w-full gap-4 p-4">
					{SIDEBAR_BUTTON.map((sidebar, i) => (
						<Accordion
							key={i}
							label={
								<p className="text-ts text-xs font-bold px-3 hover:text-tp transition py-1">
									{sidebar.label}
								</p>
							}
						>
							<div className="grid w-full gap-1 py-3 text-sm">
								{sidebar.links.map((link, j) => (
									<React.Fragment key={j}>
										{link.subLinks ? (
											<SidebarSubLink {...link} />
										) : (
											<Link href={link.to!}>
												<SidebarLinkButton
													label={link.label}
													Icon={link.Icon}
												/>
											</Link>
										)}
									</React.Fragment>
								))}
							</div>
						</Accordion>
					))}
				</div>
			</>
		),
		[]
	);

	return (
		<section>
			<nav className="dashboard_sidebar w-[280px] border-r border-dashed h-screen sticky top-0 scrollbar-styled border-ts/20 hidden 2lg:block">
				{SideBarButtons}
			</nav>
			<div className="block 2lg:hidden">
				<Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
					<nav className="dashboard_sidebar w-[280px] h-screen border-tp/20">
						{SideBarButtons}
					</nav>
				</Drawer>
			</div>
			<SidebarDrawerMenu setIsOpen={setIsOpen} />
		</section>
	);
}

function SidebarLogo() {
	return (
		<div className="mt-10 ml-6 mb-4 bc_x">
			<Link href={"/dashboard"}>
				<SiteLogo />
			</Link>
		</div>
	);
}
