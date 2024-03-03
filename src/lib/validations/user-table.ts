import * as z from "zod";

export const userTableSchema = z.object({
    name: z.string().default('N/A').optional(),
    username: z.string().default('N/A').optional(),
    password: z.string().default('N/A').optional(),
    userId: z.string().default('N/A').optional(),
    reportsTo: z.string().default('N/A').optional()
})