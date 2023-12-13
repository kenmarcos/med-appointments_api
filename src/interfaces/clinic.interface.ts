import { z } from "zod";
import { clinicSchema } from "../schemas";
import { Repository } from "typeorm";
import { Address, Clinic } from "../entities";

export type ClinicCreate = z.infer<typeof clinicSchema.create>;

export type ClinicRepo = Repository<Clinic>;
export type AddressRepo = Repository<Address>;
