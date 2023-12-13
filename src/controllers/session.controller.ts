import { Request, Response } from "express";
import { sessionService } from "../services";

const login = async (req: Request, res: Response) => {
  const token = await sessionService.login(req.body);

  return res.status(200).json({ token });
};

export default {
  login,
};
