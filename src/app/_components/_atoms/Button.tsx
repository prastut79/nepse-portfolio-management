import LoadingSpinner from "./LoadingSpinner";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	loading?: boolean;
}

export default function Button({
	children,
	loading,
	disabled,
	className,
	...props
}: ButtonProps) {
	return (
		<button
			disabled={disabled || loading}
			className={`fc_xy rounded bg-theme px-5 py-3 text-white font-bold  
			${loading || disabled ? "gap-x-2" : "bc_x"} ${className ? className : ""}`}
			{...props}
		>
			{loading && <LoadingSpinner size="xs" />}
			{children}
		</button>
	);
}

export function CancelButton({
	children,
	className,
	type,
	disabled,
	loading,
	...props
}: ButtonProps) {
	return (
		<button
			className={`zoomin rounded px-5 py-3 bc_x min-w-[92px] min-h-[48px] bg-red-200 text-red-700 ${className}`}
			type="button"
			disabled={disabled || loading}
			{...props}
		>
			{children ? children : "Cancel"}
		</button>
	);
}
