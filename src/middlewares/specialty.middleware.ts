import { NextFunction, Request, Response } from "express";
import { specialtyRepo } from "../repositories";
import AppError from "../errors/AppError.error";

const verifyUniqueSpecialtyName = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name } = req.body;

  const specialty = await specialtyRepo.findOneBy({ name });

  if (specialty) {
    throw new AppError("Specialty with this name already exists", 409);
  }

  return next();
};

const verifySpecialtyExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { specialtyId } = req.params;

  const specialty = await specialtyRepo.findOneBy({ id: specialtyId });

  if (!specialty) {
    throw new AppError("Specialty not found", 404);
  }

  return next();
};

export default { verifyUniqueSpecialtyName, verifySpecialtyExists };
