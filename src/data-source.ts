import { DataSource } from "typeorm";
import path from "path";
import "dotenv/config";

import { User } from "./entities/user.entity";
import { Announcement } from "./entities/announcement.entity";
import { createInitialEntities1680722496020 } from "./migrations/1680722496020-createInitialEntities";
import { createAvatar1681319960697 } from "./migrations/1681319960697-createAvatar";
import { Photos } from "./entities/photos";
import { createPhotos1681392079630 } from "./migrations/1681392079630-createPhotos";
import { phtosandcreate1681404799753 } from "./migrations/1681404799753-phtosandcreate";

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
        entities: [User, Announcement, Photos],
        migrations: [
          createInitialEntities1680722496020,
          createAvatar1681319960697,
          createPhotos1681392079630,
          phtosandcreate1681404799753,
        ],
      }
);

export default AppDataSource;
