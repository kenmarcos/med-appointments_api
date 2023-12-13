import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import dotenv from "dotenv";
import { handleError } from "./middlewares";
import router from "./routes";
import swaggerUiExpress from "swagger-ui-express";
import swaggerDocument from "./swagger.json";

dotenv.config();

const app: Application = express();

app.use(express.json());

app.use(
  "/api-documentation",
  swaggerUiExpress.serve,
  swaggerUiExpress.setup(swaggerDocument)
);

app.use("/api", router);

app.use(handleError);

export default app;
