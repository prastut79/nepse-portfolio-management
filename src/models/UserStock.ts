import { Schema, model, models } from "mongoose";

const UserStockSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: "user",
		required: true,
	},
	stock: {
		type: Schema.Types.ObjectId,
		ref: "stock",
		required: true,
	},
	transactions: [
		{
			type: Schema.Types.ObjectId,
			ref: "transaction",
			required: true,
		},
	],
});
UserStockSchema.index({ user: 1, stock: 1 }, { unique: true });

const UserStock = models.userstock || model("userstock", UserStockSchema);

export default UserStock;
