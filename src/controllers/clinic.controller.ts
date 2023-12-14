import { Request, Response } from "express";
import { clinicService } from "../services";

const create = async (req: Request, res: Response) => {
  const newClinic = await clinicService.create(req.body);

  return res.status(201).json(newClinic);
};

export default {
  create,
};
