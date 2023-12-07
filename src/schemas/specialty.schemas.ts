import { z } from "zod";

export const specialtySchema = z.object({
  id: z.string(),
  name: z.string().max(120),
});

export const specialtyCreateSchema = specialtySchema.omit({
  id: true,
});
