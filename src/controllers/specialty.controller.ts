import { NextFunction, Request, Response } from "express";
import specialtyService from "../services/specialty.service";

const create = async (req: Request, res: Response, next: NextFunction) => {
  const newSpecialty = await specialtyService.create(req.body);

  return res.status(201).json(newSpecialty);
};

export default {
  create,
};
