import { z } from "zod";

export const appointmentSchema = z.object({
  id: z.string(),
  date: z.string(),
  time: z.string(),
  userId: z.string(),
  clinicId: z.string(),
});

export const appointmentCreateSchema = appointmentSchema.omit({
  id: true,
  userId: true,
});
