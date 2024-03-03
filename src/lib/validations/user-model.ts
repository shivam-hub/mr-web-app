import * as z from "zod";


const reportsTo = z.object({
    name : z.string().nullish().optional(),
    gsstNumber : z.string().nullish().optional(),
    location : z.string().nullish().optional()
})

export const user = z.object({
  name: z.string().nullish(),
  username: z.string().nullish().optional(),
  password: z.string().nullish().optional(),

  contactNo: z.string().nullish().optional(),
  email: z.string().nullish().optional(),

  reportsTo: z.string().nullish().optional(),
  userType: z.string().nullish().optional(),
  territory: z.string().nullish().optional(),
});

