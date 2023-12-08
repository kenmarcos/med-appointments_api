import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import dotenv from "dotenv";
import { handleError } from "./middlewares";
import routes from "./routes";

dotenv.config();

const app: Application = express();

app.use(express.json());

routes(app);

app.use(handleError);

export default app;
