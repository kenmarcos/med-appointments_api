import { Router } from "express";
import { globalMiddleware, userMiddleware } from "../middlewares";
import { userController } from "../controllers";
import { userSchema } from "../schemas";

const userRouter = Router();

userRouter.post(
  "/",
  globalMiddleware.validateBody(userSchema.create),
  userMiddleware.verifyEmail,
  userController.create
);

userRouter.get(
  "/",
  globalMiddleware.verifyToken,
  globalMiddleware.verifyAdmin,
  userController.readAll
);

export default userRouter;
