import { MigrationInterface, QueryRunner } from "typeorm";

export class FirstMigration1680700322741 implements MigrationInterface {
    name = 'FirstMigration1680700322741'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "email" character varying(100) NOT NULL, "cpf" character varying(20) NOT NULL, "phone" character varying(20) NOT NULL, "birthday" TIMESTAMP NOT NULL, "description" character varying(280) NOT NULL, "cep" character varying(10) NOT NULL, "state" character varying(20) NOT NULL, "city" character varying(100) NOT NULL, "street" character varying(140) NOT NULL, "number" character varying(5) NOT NULL, "complement" character varying(50), "isStaff" boolean NOT NULL DEFAULT false, "password" character varying(80) NOT NULL, "isAdm" boolean NOT NULL DEFAULT false, "isActive" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
