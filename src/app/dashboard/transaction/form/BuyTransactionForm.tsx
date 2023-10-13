"use client";

import Input from "@app/_components/_atoms/Input";
import { TransactionType } from "@schema/transactionSchema";
import React, { useEffect } from "react";
import { Control, UseFormRegister, useFieldArray } from "react-hook-form";
import { RiAddFill, RiDeleteBin3Line } from "react-icons/ri";

export default function BuyTransactionForm({
	control,
	register,
}: {
	control: Control<TransactionType>;
	register: UseFormRegister<TransactionType>;
}) {
	const { fields, append, remove } = useFieldArray<TransactionType>({
		control,
		name: "transactions",
		shouldUnregister: true,
	});

	function handleAppend() {
		append({ price: "", unit: "" });
	}

	useEffect(() => {
		if (fields.length === 0) {
			handleAppend();
		}
	}, []);

	function handleRemove(index: number) {
		if (fields.length > 1) remove(index);
	}

	return (
		<div className="grid w-full gap-6">
			{fields?.map(({ id }, i) => (
				<div key={id} className="flex gap-4">
					<Input
						label="Units"
						type="number"
						min={0}
						max={9999999999}
						autoFocus
						required
						{...register(`transactions.${i}.unit`)}
					/>
					<Input
						label="Price"
						type="number"
						min={0}
						max={49999}
						required
						{...register(`transactions.${i}.price`)}
					/>
					<button
						onClick={() => handleRemove(i)}
						type="button"
						className="bc_x"
					>
						<RiDeleteBin3Line size={18} className="text-red-500" />
					</button>
				</div>
			))}
			<div>
				<button
					type="button"
					className=" bc_x text-theme text-sm opacity-90 hover:opacity-100 bg-theme/10 font-bold px-3 py-2 rounded "
					onClick={handleAppend}
				>
					<span className="fc_xy ">
						<RiAddFill size={20} className="text-theme mr-1" />
						Add Field
					</span>
				</button>
			</div>
		</div>
	);
}
