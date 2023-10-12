"use client";

import Chooseable from "@app/_components/_atoms/Chooseable";
import Input from "@app/_components/_atoms/Input";
import NativeSelect, { NativeOption } from "@app/_components/_atoms/Select";
import { TRANSACTION_ENUM, TRANSACTION_TYPE } from "@models/enums";
import { TransactionType } from "@schema/transactionSchema";
import {
	useForm,
	Controller,
	Control,
	useWatch,
	UseFormRegister,
} from "react-hook-form";
import BuyTransactionForm from "./BuyTransactionForm";
import Button from "@app/_components/_atoms/Button";

export default function TransactionForm() {
	const { control, register } = useForm<TransactionType>({});

	return (
		<form>
			<div className="pb-12">
				<h5 className="text-ts text-sm pb-4">
					Select Transaction Type
				</h5>
				<Controller
					name="type"
					control={control}
					render={({ field: { onChange, value } }) => (
						<Chooseable
							selected={value}
							onChange={onChange}
							data={TRANSACTION_TYPE}
						></Chooseable>
					)}
				/>
			</div>
			<div className="grid w-full gap-6 bg-bs rounded-lg p-4 ">
				<h5 className="text-ts text-sm ">Transaction Details</h5>
				<NativeSelect label="Stock" placeholder="Select a Stock">
					<NativeOption>haha</NativeOption>
				</NativeSelect>
				<TransactionFields control={control} register={register} />
				<div className="">
					<Button className="float-right">Create</Button>
				</div>
			</div>
		</form>
	);
}

function TransactionFields({
	control,
	register,
}: {
	control: Control<TransactionType>;
	register: UseFormRegister<TransactionType>;
}) {
	const transaction = useWatch({
		control,
		exact: true,
		name: "type",
		// defaultValue: { transactions: [{ amount: "", unit: "" }] },
	});

	if (!transaction) return <></>;

	return (
		<div>
			{TRANSACTION_ENUM.BUY === transaction ||
			TRANSACTION_ENUM.SELL === transaction ? (
				<BuyTransactionForm control={control} register={register} />
			) : TRANSACTION_ENUM.DIVIDEND === transaction ? (
				<Input
					label="Total Amount"
					type="number"
					{...register("totalAmount")}
				/>
			) : (
				<div className=" flex gap-4">
					<Input
						label="Total Units"
						type="number"
						{...register("totalUnit")}
					/>
					<Input
						label="Price"
						type="number"
						{...register("wacc", { value: "100" })}
					/>
				</div>
			)}
		</div>
	);
}
