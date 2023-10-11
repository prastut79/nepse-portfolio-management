import { Schema, model, models } from "mongoose";
import { TRANSACTION_ENUM } from "./enums";

const TransactionSchema = new Schema({
	date: { type: Date, default: Date.now },
	totalAmount: Number,
	wacc: Number,
	totalUnit: Number,
	transactions: [
		{
			unit: { type: Number, required: true },
			price: { type: Number, required: true },
			amount: { type: Number, required: true },
		},
	],
	// stock: {
	// 	type: Schema.Types.ObjectId,
	// 	ref: "stock",
	// 	required: true,
	// },
	// addedBy: {
	// 	type: Schema.Types.ObjectId,
	// 	ref: "user",
	// 	required: true,
	// },
	type: {
		type: String,
		enum: Object.values(TRANSACTION_ENUM),
		required: true,
	},
});

const Transaction =
	models.transaction || model("transaction", TransactionSchema);

export default Transaction;
