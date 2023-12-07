import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

const validateData =
  (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => {
    req.body = schema.parse(req.body);

    return next();
  };

export default validateData;
