import { Router } from "express";
import { specialtyController } from "../controllers";
import { globalMiddleware, specialtyMiddleware } from "../middlewares";
import { specialtySchema } from "../schemas";

const specialtyRouter = Router();

specialtyRouter.post(
  "/",
  globalMiddleware.verifyToken,
  globalMiddleware.verifyAdmin,
  globalMiddleware.validateBody(specialtySchema.create),
  specialtyMiddleware.verifyUniqueSpecialtyName,
  specialtyController.create
);

specialtyRouter.get("/", specialtyController.readAll);

specialtyRouter.get(
  "/:specialtyId",
  specialtyMiddleware.verifySpecialtyExists,
  specialtyController.readOne
);

export default specialtyRouter;
