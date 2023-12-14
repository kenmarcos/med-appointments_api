import AppError from "../errors/AppError.error";
import { ClinicCreate } from "../interfaces";
import { addressRepo, clinicRepo, specialtyRepo } from "../repositories";
import { clinicSchema } from "../schemas";

const create = async (data: ClinicCreate) => {
  const specialty = await specialtyRepo.findOneBy({ id: data.specialtyId });

  if (!specialty) {
    throw new AppError("Specialty not found", 404);
  }

  const address = await addressRepo.save(data.address);

  const clinic = await clinicRepo.save({
    ...data,
    address,
    specialty,
  });

  return clinicSchema.response.parse(clinic);
};

export default {
  create,
};
