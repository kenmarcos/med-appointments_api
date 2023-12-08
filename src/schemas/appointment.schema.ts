import { z } from "zod";

const appointment = z.object({
  id: z.string(),
  date: z.string(),
  time: z.string(),
  userId: z.string(),
  clinicId: z.string(),
});

const create = appointment.omit({
  id: true,
  userId: true,
});

export default {
  appointment,
  create,
};
