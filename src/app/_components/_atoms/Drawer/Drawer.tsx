import React, { PropsWithChildren, useEffect, useRef } from "react";

export default function Drawer({
	children,
	isOpen,
	onClose,
}: PropsWithChildren<{
	isOpen: boolean;
	onClose: (state: boolean) => any;
}>) {
	const divRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (isOpen) {
			divRef.current?.focus();
		}
	}, [isOpen]);

	function handleKeyPress(e: React.KeyboardEvent<HTMLDivElement>) {
		if (e.key === "Escape") {
			onClose(false);
		}
	}

	if (!isOpen) {
		return <></>;
	}

	return (
		<div>
			<div
				className="bg-black/20 fixed inset-0 w-full h-full z-40 backdrop-blur-sm"
				onClick={() => onClose(false)}
			/>
			<div
				ref={divRef}
				tabIndex={0}
				className="slide-right fixed bg-bp/90 backdrop-blur-xl shadow z-50 transition scrollbar-styled top-0 left-0 "
				onKeyDown={handleKeyPress}
			>
				{children}
			</div>
		</div>
	);
}
