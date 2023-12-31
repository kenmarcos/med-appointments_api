import app from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(async () => {
    console.log("Database connected.");

    const PORT = Number(process.env.PORT) || 3000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}.`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
