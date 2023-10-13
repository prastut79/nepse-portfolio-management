import { z } from "zod";
import { idSchema } from "./baseSchema";

const stockSchema = idSchema.extend({
	short: z.string().max(10),
	name: z.string(),
});

export default stockSchema;
export type StockType = z.infer<typeof stockSchema>;
