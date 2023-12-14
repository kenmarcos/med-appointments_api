import { SpecialtyCreate } from "../interfaces";
import { specialtyRepo } from "../repositories";
import { specialtySchema } from "../schemas";

const create = async (data: SpecialtyCreate) => {
  const newSpecialty = await specialtyRepo.save(data);

  return specialtySchema.specialty.parse(newSpecialty);
};

export default {
  create,
};
