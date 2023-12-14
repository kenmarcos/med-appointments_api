import { Request, Response } from "express";
import specialtyService from "../services/specialty.service";

const create = async (req: Request, res: Response) => {
  const newSpecialty = await specialtyService.create(req.body);

  return res.status(201).json(newSpecialty);
};

const readAll = async (req: Request, res: Response) => {
  const specialties = await specialtyService.readAll();

  return res.status(200).json(specialties);
};

const readOne = async (req: Request, res: Response) => {
  const { specialtyId } = req.params;

  const specialty = await specialtyService.readOne(specialtyId);

  return res.status(200).json(specialty);
};

export default {
  create,
  readAll,
  readOne,
};
