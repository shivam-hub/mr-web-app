import * as z from "zod";

export const doctorTableSchema = z.object({
    regNo: z.string().nullish().optional(),
    doctorName: z.string().nullish().optional(),
    clinicName: z.string().nullish().optional(),
    speciality: z.string().nullish().optional(),
    region: z.string().nullish().optional(),
})