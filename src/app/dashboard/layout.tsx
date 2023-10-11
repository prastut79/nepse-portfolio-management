import React, { PropsWithChildren } from "react";
import Sidebar from "@app/_components/_dashboard/_sidebar/Sidebar";
import Navbar from "@app/_components/_navbar/Navbar";

export default function Layout({ children }: PropsWithChildren<any>) {
	return (
		<div className="flex h-full">
			<Sidebar />
			<main className="flex-1 h-full">
				<Navbar />
				<div className="px-4 pt-20 pb-6 w-full h-full">{children}</div>
			</main>
		</div>
	);
}
