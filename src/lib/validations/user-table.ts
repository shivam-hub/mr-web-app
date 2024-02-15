import * as z from "zod";

export const userTableSchema = z.object({
    name: z.string(),
    username: z.string(),
    password: z.string(),
    userId: z.string()
})