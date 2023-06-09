import app from "./app";
import AppDataSource from "./data-source";
import "dotenv/config";

(async () => {
  await AppDataSource.initialize().catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log("Servidor executando");
  });
})();
