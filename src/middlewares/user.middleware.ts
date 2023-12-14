import { NextFunction, Request, Response } from "express";
import { userRepo } from "../repositories";
import AppError from "../errors/AppError.error";

const verifyUniqueEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;

  const user = await userRepo.findOneBy({ email });

  if (user) {
    throw new AppError("User with this email already exists", 409);
  }

  return next();
};

const verifyUserExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.params;

  const user = await userRepo.findOneBy({ id: userId });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  res.locals = { ...res.locals, user };

  return next();
};

export default {
  verifyUniqueEmail,
  verifyUserExists,
};
