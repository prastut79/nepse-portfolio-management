import { AiFillCheckCircle } from "react-icons/ai";

interface ChooseableProps {
	data: { label: string; value: string }[];
	selected: string;
	onChange: (value: string) => any;
}
export default function Chooseable({
	data,
	selected,
	onChange,
}: ChooseableProps) {
	return (
		<div className="flex gap-4 flex-wrap">
			{data?.map(({ label, value }, i) => (
				<div
					key={i}
					onClick={() => onChange?.(value)}
					className={`relative transition truncate text-sm cursor-pointer px-8 py-4 rounded shadow bg-bs select-none ${
						selected === value
							? "bg-theme/10 text-theme"
							: "text-ts " +
							  (selected && "opacity-30 hover:opacity-100")
					}`}
				>
					{selected === value && (
						<div className="absolute top-1 right-1 rounded-full ">
							<AiFillCheckCircle
								size={14}
								className=" text-theme "
							/>
						</div>
					)}
					{label}
				</div>
			))}
		</div>
	);
}
