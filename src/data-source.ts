import { DataSource } from "typeorm";
import path from "path";
import "dotenv/config";
import { FirstMigration1680700322741 } from "./migrations/1680700322741-FirstMigration"
import { User } from "./entities/user.entity";

const AppDataSource = new DataSource(
  process.env.NODE_ENV === "test"
    ? {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: ["src/entities/*.ts"],
      }
    : {
        type: "postgres",
        host: process.env.PGHOST,
        port: parseInt(process.env.PGPORT!),
        username: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
        logging: true,
        synchronize: false,
        entities: [User],
        migrations: [FirstMigration1680700322741],
      }
);

export default AppDataSource;
