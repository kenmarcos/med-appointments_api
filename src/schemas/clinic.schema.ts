import { z } from "zod";

const clinic = z.object({
  id: z.string(),
  public: z.boolean().default(true),
  name: z.string().max(120),
  beds: z.number().positive().int(),
  partnerSince: z.date(),
  infosUpdateAt: z.date(),
  address: z.object({
    street: z.string().max(120),
    number: z.number().positive().int(),
    zip: z.string().max(8),
    city: z.string().max(50),
    state: z.string().max(2),
  }),
  specialtyId: z.string(),
  specialty: z.object({
    id: z.string(),
    name: z.string().max(120),
  }),
});

const create = clinic.omit({
  id: true,
  partnerSince: true,
  infosUpdateAt: true,
  specialty: true,
});

const response = clinic.omit({
  specialtyId: true,
});

export default {
  clinic,
  create,
  response,
};
