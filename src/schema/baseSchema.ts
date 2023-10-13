import { z } from "zod";

export const idSchema = z.object({
	_id: z.string().optional(),
});

export const baseSchema = idSchema.extend({
	createdAt: z.string().optional(),
	updatedAt: z.string().optional(),
});
