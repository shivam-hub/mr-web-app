import * as z from "zod";

export const reportsTableSchema = z.object({
    mrName: z.string().nullish().optional(),
    doctorName: z.string().nullish().optional(),
    region: z.string().nullish().optional(),
    latitude: z.number().nullish().optional(),
    longitude: z.number().nullish().optional(),
    visitedOn: z.string().nullish().optional()
})