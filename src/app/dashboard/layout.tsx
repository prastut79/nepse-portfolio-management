import React, { PropsWithChildren } from "react";
import Sidebar from "@app/_components/_dashboard/_sidebar/Sidebar";
import Navbar from "@app/_components/_navbar/Navbar";

export default function Layout({ children }: PropsWithChildren<any>) {
	return (
		<div className="flex relative">
			<Sidebar />
			<main className="flex-1">
				<Navbar />
				<div className="px-8 pt-24 pb-6 w-full min-h-screen">
					{children}
				</div>
			</main>
		</div>
	);
}
