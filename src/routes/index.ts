import { Router } from "express";
import userRouter from "./user.router";
import sessionRouter from "./session.router";

const router = Router();

router.use("/users", userRouter);
router.use("/login", sessionRouter);

export default router;
