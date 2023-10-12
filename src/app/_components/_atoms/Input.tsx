import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	error?: string;
	animationDelay?: number;
}

const Input = forwardRef(function Input(
	{
		label,
		type = "text",
		error,
		animationDelay,
		className,
		...props
	}: InputProps,
	ref: any
) {
	return (
		<div
			className={`w-full relative ${animationDelay ? "slideup" : ""}`}
			style={{
				...(animationDelay
					? { animationDelay: `${animationDelay}ms` }
					: {}),
			}}
		>
			<input
				ref={ref}
				id={"peer"}
				placeholder=" "
				type={type}
				className={`peer w-full px-3 pt-4 pb-3 z-10 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed text-tp text-sm bg-transparent placeholder:text-tp border border-ts/40  ${
					error
						? "animate-shake !border-rose-500 focus:border-rose-500"
						: "focus:border-tp"
				}${className ? className : ""}`}
				{...props}
			/>

			<label
				className={`absolute pointer-events-none text-sm text-ts duration-200 transform -translate-y-7 top-4 px-2 origin-[0] left-2 peer-placeholder-shown:scale-105 
peer-placeholder-shown:text-ts/70 font-normal
				peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] scale-[.85] peer-focus:-translate-y-7 peer-focus:text-tp bg-bs ${
					error ? "text-rose-500" : ""
				}`}
				htmlFor="peer"
			>
				{label}
			</label>

			{error && (
				<span className="text-red-400 font-semibold text-sm text-center">
					{error}
				</span>
			)}
		</div>
	);
});

export default Input;
