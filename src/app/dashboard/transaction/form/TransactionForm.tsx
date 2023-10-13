"use client";

import Chooseable from "@app/_components/_atoms/Chooseable";
import Input from "@app/_components/_atoms/Input";
import NativeSelect, { NativeOption } from "@app/_components/_atoms/Select";
import { TRANSACTION_ENUM, TRANSACTION_TYPE } from "@models/enums";
import transactionSchema, { TransactionType } from "@schema/transactionSchema";
import {
	useForm,
	Controller,
	Control,
	useWatch,
	UseFormRegister,
	FieldErrors,
} from "react-hook-form";
import BuyTransactionForm from "./BuyTransactionForm";
import Button from "@app/_components/_atoms/Button";
import StockSelect from "@app/_components/_dashboard/_StockSelect/StockSelect";

export default function TransactionForm({
	value,
	onSubmit,
}: {
	value?: TransactionType;
	onSubmit: (data: TransactionType) => any;
}) {
	const { control, register, handleSubmit } = useForm<TransactionType>({
		defaultValues: value,
	});

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
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
						/>
					)}
				/>
			</div>
			<div className="grid w-full gap-6 bg-bs rounded-lg py-4 px-6 ">
				<h5 className="text-ts text-sm ">Transaction Details</h5>
				<StockSelect {...register("stock")} />
				<TransactionFields control={control} register={register} />
				<div>
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
					autoFocus
					required
					{...register("totalAmount")}
				/>
			) : (
				<div className=" flex gap-4">
					<Input
						label="Total Units"
						type="number"
						autoFocus
						required
						{...register("totalUnit")}
					/>
					<Input
						label="Price"
						type="number"
						required
						{...register("wacc", { value: "100" })}
					/>
				</div>
			)}
		</div>
	);
}
