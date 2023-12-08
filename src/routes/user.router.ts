import { Router } from "express";
import { validateData } from "../middlewares";
import { userController } from "../controllers";
import { userSchema } from "../schemas";

const userRouter = Router();

userRouter.post("/", validateData(userSchema.create), userController.create);

export default userRouter;
