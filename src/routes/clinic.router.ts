import { Router } from "express";
import { clinicController } from "../controllers";
import { globalMiddleware, clinicMiddleware } from "../middlewares";
import { clinicSchema } from "../schemas";

const clinicRouter = Router();

clinicRouter.post(
  "/",
  globalMiddleware.verifyToken,
  globalMiddleware.verifyAdmin,
  globalMiddleware.validateBody(clinicSchema.create),
  clinicMiddleware.verifyAddressExists,
  clinicController.create
);

export default clinicRouter;
