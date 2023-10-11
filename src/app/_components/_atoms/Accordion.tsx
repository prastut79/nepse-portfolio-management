"use client";

import { PropsWithChildren, useState } from "react";
import { IconType } from "react-icons";

export default function Accordion({
	children,
	label,
	isOpen = false,
	expandClass = "accordion__active",
	Icon,
}: PropsWithChildren<{
	label: React.ReactNode;
	Icon?: React.ReactNode;
	expandClass?: string;
	isOpen?: boolean;
}>) {
	const [expand, setExpand] = useState(isOpen);

	return (
		<div className={expand ? expandClass : ""}>
			<div
				className="w-full cursor-pointer"
				onClick={() => setExpand((p) => !p)}
			>
				{label}
				{Icon}
			</div>
			<div
				className={`overflow-hidden ${
					expand ? " max-h-screen" : "max-h-0 "
				}`}
				style={{
					transition: expand
						? "max-height 1s ease"
						: "max-height .4s cubic-bezier(0, 1, 0, 1)",
				}}
			>
				{children}
			</div>
		</div>
	);
}
