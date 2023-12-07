import { z } from "zod";

export const clinicSchema = z.object({
  id: z.string(),
  public: z.boolean().default(true),
  name: z.string().max(120),
  beds: z.number().positive().int(),
  partnerSince: z.string(),
  infosUpdateAt: z.string(),
  address: z.object({
    street: z.string().max(120),
    zip: z.string().max(8),
    city: z.string().max(50),
    state: z.string().max(2),
  }),
  specialtyId: z.string(),
});

export const clinicCreateSchema = clinicSchema.omit({
  id: true,
  partnerSince: true,
  infosUpdateAt: true,
});
