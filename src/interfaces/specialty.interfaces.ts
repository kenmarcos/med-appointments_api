import { z } from "zod";
import { specialtyCreateSchema } from "../schemas";
import { Repository } from "typeorm";
import { Specialty } from "../entities";

export type SpecialtyCreate = z.infer<typeof specialtyCreateSchema>;

export type SpecialtyRepo = Repository<Specialty>;
