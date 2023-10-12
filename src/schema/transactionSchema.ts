import { z } from "zod";

const transactionSchema = z.object({
	type: z.string({ required_error: "Transaction Type is Required." }).min(5),
	stock: z.string(),
	totalUnit: z.string().optional(),
	totalAmount: z.string().optional(),
	transactions: z
		.array(
			z.object({
				unit: z.string(),
				price: z.string(),
				amount: z.string().optional(),
			})
		)
		.optional(),
	wacc: z.string().optional(),
	cgt: z.string().optional(),
});

export default transactionSchema;
export type TransactionType = z.infer<typeof transactionSchema>;
