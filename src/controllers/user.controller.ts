import { Request, Response } from "express";
import { userService } from "../services";

const create = async (req: Request, res: Response) => {
  const newUser = await userService.create(req.body);

  res.status(201).json(newUser);
};

export default {
  create,
};
