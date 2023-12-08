import { z } from "zod";
import { clinicCreateSchema } from "../schemas";
import { Repository } from "typeorm";
import { Address, Clinic } from "../entities";

export type ClinicCreate = z.infer<typeof clinicCreateSchema>;

export type ClinicRepo = Repository<Clinic>;
export type AddressRepo = Repository<Address>;
