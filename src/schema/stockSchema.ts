import { z } from "zod";

const stockSchema = z.object({
	short: z.string().max(10),
	name: z.string(),
});

export default stockSchema;
export type TransactionType = z.infer<typeof stockSchema>;
