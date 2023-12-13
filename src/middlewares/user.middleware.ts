import { NextFunction, Request, Response } from "express";
import { userRepo } from "../repositories";
import AppError from "../errors/AppError.error";

const verifyEmail = async (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;

  const user = await userRepo.findOneBy({ email });

  if (user) {
    throw new AppError("User with this email already exists", 409);
  }

  return next();
};

export default {
  verifyEmail,
};
