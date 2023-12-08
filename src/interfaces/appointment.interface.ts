import { z } from "zod";
import { appointmentCreateSchema } from "../schemas";
import { Repository } from "typeorm";
import { Appointment } from "../entities";

export type AppointmentCreate = z.infer<typeof appointmentCreateSchema>;

export type AppointmentRepo = Repository<Appointment>;
