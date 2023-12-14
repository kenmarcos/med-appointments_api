import { NextFunction, Request, Response } from "express";
import { addressRepo } from "../repositories";
import AppError from "../errors/AppError.error";

const verifyAddressExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { address } = req.body;

  const addressExists = await addressRepo.findOne({
    where: {
      street: address.street,
      number: address.number,
      zip: address.zip,
      city: address.city,
      state: address.state,
    },
  });

  if (addressExists) {
    throw new AppError("Address already exists", 409);
  }

  return next();
};

export default {
  verifyAddressExists,
};
