import { Router } from "express";
import { userMiddleware, validateData } from "../middlewares";
import { userController } from "../controllers";
import { userSchema } from "../schemas";

const userRouter = Router();

userRouter.post(
  "/",
  validateData(userSchema.create),
  userMiddleware.verifyEmail,
  userController.create
);

export default userRouter;
