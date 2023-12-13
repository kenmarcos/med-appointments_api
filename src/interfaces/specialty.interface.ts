import { z } from "zod";
import { specialtySchema } from "../schemas";
import { Repository } from "typeorm";
import { Specialty } from "../entities";

export type SpecialtyCreate = z.infer<typeof specialtySchema.create>;

export type SpecialtyRepo = Repository<Specialty>;
