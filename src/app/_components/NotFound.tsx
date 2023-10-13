import Button from "./_atoms/Button";

export default function NotFound({
	message = "No Data Found",
	add,
}: {
	message?: React.ReactNode;
	add?: { label?: string; href: string };
}) {
	return (
		<div className="fc_xy rounded-lg text-tp w-full h-full font-bold py-20">
			<div>
				{message}
				{add && (
					<div className="py-4 fc_xy">
						<Button>{add.label ?? "Add"}</Button>
					</div>
				)}
			</div>
		</div>
	);
}
