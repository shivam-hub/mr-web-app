import * as z from "zod";


const medical = z.object({
    name : z.string().nullish().optional(),
    gsstNumber : z.string().nullish().optional(),
    location : z.string().nullish().optional()
})

export const doctor = z.object({
    regNo : z.string().nullish().optional(),
    name : z.string().nullish(),
    speciality : z.string().nullish().optional(),
    addressline1 : z.string().nullish().optional(),
    addressline2 : z.string().nullish(),
    city : z.string().nullish(),
    pincode : z.string().nullish(),
    east_west : z.string().nullish().optional(),
    region : z.string().nullish(),
    state : z.string().nullish(),
    associatedMedical : z.array(medical).nullish().optional(),
    associatedMR : z.string().nullish(),
})

