import React, { HTMLAttributes, PropsWithChildren, forwardRef } from "react";
import LoadingSpinner from "./LoadingSpinner";

interface NativeSelectProps
	extends PropsWithChildren<HTMLAttributes<HTMLSelectElement>> {
	label?: string;
	loading?: boolean;
}

const NativeSelect = forwardRef(function NativeSelect(
	{
		children,
		className,
		label,
		placeholder = "Select...",
		loading,
		...props
	}: NativeSelectProps,
	ref: any
) {
	return (
		<div className="relative">
			<label
				htmlFor="peer"
				className={`absolute pointer-events-none text-sm text-ts duration-200 transform -translate-y-7 bg-bs top-4 px-2 origin-[0] left-2 scale-[.85] z-10 `}
			>
				{label}
			</label>
			{loading && (
				<div className="absolute right-4 z-10 px-2 py-4 fc_xy">
					<LoadingSpinner size="sm" />
				</div>
			)}
			<select
				ref={ref}
				className={`peer bg-transparent border border-ts/40 focus:border-ts rounded-md color-tp cursor-pointer block w-full py-3 pt-4 px-3 transition !font-public_sans ${
					className ? className : ""
				}`}
				{...props}
				disabled={loading}
			>
				<option disabled hidden selected value="">
					{placeholder}
				</option>
				{children}
			</select>
		</div>
	);
});

export function NativeOption({
	children,
	className,
	...props
}: PropsWithChildren<HTMLAttributes<HTMLOptionElement>>) {
	return (
		<option
			className={`text-tp text-base py-2 my-2 bg-bs !font-public_sans ${
				className ? className : ""
			} `}
			{...props}
		>
			&#160;{children}
		</option>
	);
}
export default NativeSelect;
