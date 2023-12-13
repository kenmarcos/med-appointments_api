import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import dotenv from "dotenv";
import { handleError } from "./middlewares";
import router from "./routes";

dotenv.config();

const app: Application = express();

app.use(express.json());

app.use("/api", router);

app.use(handleError);

export default app;
