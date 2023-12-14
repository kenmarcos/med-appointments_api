import { Router } from "express";
import { globalMiddleware, userMiddleware } from "../middlewares";
import { userController } from "../controllers";
import { userSchema } from "../schemas";

const userRouter = Router();

userRouter.post(
  "/",
  globalMiddleware.validateBody(userSchema.create),
  userMiddleware.verifyUniqueEmail,
  userController.create
);

userRouter.get(
  "/",
  globalMiddleware.verifyToken,
  globalMiddleware.verifyAdmin,
  userController.readAll
);

userRouter.patch(
  "/:userId",
  globalMiddleware.validateBody(userSchema.update),
  globalMiddleware.verifyToken,
  globalMiddleware.verifyPermission,
  userMiddleware.verifyUserExists,
  userController.update
);

userRouter.delete(
  "/:userId",
  globalMiddleware.verifyToken,
  globalMiddleware.verifyPermission,
  userMiddleware.verifyUserExists,
  userController.remove
);

export default userRouter;
