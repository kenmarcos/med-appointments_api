import { Application } from "express";
import userRouter from "./user.router";

const routes = (app: Application) => {
  app.use("/users", userRouter);
};

export default routes;
