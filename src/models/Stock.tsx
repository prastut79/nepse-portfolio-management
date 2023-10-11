import { Schema, model, models } from "mongoose";

const StockSchema = new Schema(
	{
		symbol: { type: String, required: true },
		label: { type: String, required: true },
	},
	{ timestamps: true }
);

const Stock = models?.stock || model("stock", StockSchema);

export default Stock;
