import { Router } from "express";
import userRouter from "./user.router";
import sessionRouter from "./session.router";
import specialtyRouter from "./specialty.router";
import clinicRouter from "./clinic.router";

const router = Router();

router.use("/users", userRouter);
router.use("/login", sessionRouter);
router.use("/specialties", specialtyRouter);
router.use("/clinics", clinicRouter);

export default router;
