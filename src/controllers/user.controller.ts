import { Request, Response } from "express";
import { userService } from "../services";

const create = async (req: Request, res: Response) => {
  const newUser = await userService.create(req.body);

  res.status(201).json(newUser);
};

const readAll = async (req: Request, res: Response) => {
  const users = await userService.readAll();

  res.status(200).json(users);
};

const remove = async (req: Request, res: Response) => {
  const { user } = res.locals;

  await userService.remove(user);

  res.status(204).json();
};

export default {
  create,
  readAll,

  remove,
};
