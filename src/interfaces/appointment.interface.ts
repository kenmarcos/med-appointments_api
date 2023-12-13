import { z } from "zod";
import { appointmentSchema } from "../schemas";
import { Repository } from "typeorm";
import { Appointment } from "../entities";

export type AppointmentCreate = z.infer<typeof appointmentSchema.create>;

export type AppointmentRepo = Repository<Appointment>;
