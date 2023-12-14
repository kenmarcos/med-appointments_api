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

const readOne = async (specialtyId: string) => {
  const specialty = await specialtyRepo.findOne({
    where: {
      id: specialtyId,
    },
    relations: {
      clinics: true,
    },
  });

  return specialty;
};

export default {
  create,
  readAll,
  readOne,
};
