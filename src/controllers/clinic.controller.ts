import { Request, Response } from "express";
import { clinicService } from "../services";

const create = async (req: Request, res: Response) => {
  const newClinic = await clinicService.create(req.body);

  return res.status(201).json(newClinic);
};

const readAll = async (req: Request, res: Response) => {
  const clinics = await clinicService.readAll();

  return res.status(200).json(clinics);
};

export default {
  create,
  readAll,
};
