import { NextFunction, Request, Response } from "express";
import { ZodError, ZodTypeAny } from "zod";
import AppError from "../errors/AppError.error";
import { JsonWebTokenError } from "jsonwebtoken";
import jwt from "jsonwebtoken";

const handleError = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  if (err instanceof ZodError) {
    return res.status(400).json({ message: err.flatten().fieldErrors });
  }

  if (err instanceof JsonWebTokenError) {
    return res.status(401).json({ message: err.message });
  }

  console.log(err);
  return res.status(500).json({ message: "Internal server error" });
};

const validateBody =
  (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => {
    req.body = schema.parse(req.body);

    return next();
  };

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new AppError("Missing bearer token", 401);
  }

  const token = authorization.split(" ")[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY!);

  res.locals = { ...res.locals, decoded };

  return next();
};

const verifyAdmin = (req: Request, res: Response, next: NextFunction) => {
  const { isAdmin } = res.locals.decoded;

  if (!isAdmin) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};

const verifyPermission = (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.params;
  const { sub, admin } = res.locals.decoded;

  if (admin) {
    return next();
  }

  if (userId !== sub) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};

export default {
  handleError,
  validateBody,
  verifyToken,
  verifyAdmin,
  verifyPermission,
};
