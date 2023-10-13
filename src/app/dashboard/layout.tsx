import { PropsWithChildren } from "react";
import Sidebar from "@app/_components/_dashboard/_sidebar/Sidebar";
import Navbar from "@app/_components/_navbar/Navbar";
import { getServerSession } from "next-auth";
import { NextOptions } from "@app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { P_LOGIN } from "@config/siteConfig";

export default async function Layout({ children }: PropsWithChildren<any>) {
	const session = await getServerSession(NextOptions);

	console.log("SESS", session);
	if (!session?.user) {
		redirect(P_LOGIN.href);
	}

	return (
		<div className="flex h-full	">
			<Sidebar />
			<main className=" w-full">
				<Navbar />
				<div className="px-4 pt-20 pb-6 w-full h-full overflow-auto">
					{children}
				</div>
			</main>
		</div>
	);
}
