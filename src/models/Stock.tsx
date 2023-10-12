import { Schema, model, models } from "mongoose";

const StockSchema = new Schema(
	{
		short: { type: String, required: true, unique: true },
		name: { type: String, required: true },
	},
	{ timestamps: true }
);

const Stock = models?.stock || model("stock", StockSchema);

export default Stock;
