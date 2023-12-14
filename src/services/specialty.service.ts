import { SpecialtyCreate } from "../interfaces";
import { specialtyRepo } from "../repositories";
import { specialtySchema } from "../schemas";

const create = async (data: SpecialtyCreate) => {
  const newSpecialty = await specialtyRepo.save(data);

  return specialtySchema.specialty.parse(newSpecialty);
};

const readAll = async () => {
  const specialties = await specialtyRepo.find();

  return specialtySchema.readAll.parse(specialties);
};

export default {
  create,
  readAll,
};
