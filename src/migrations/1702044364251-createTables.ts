import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1702044364251 implements MigrationInterface {
    name = 'CreateTables1702044364251'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "specialties" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(120) NOT NULL, CONSTRAINT "UQ_565f38f8b0417c7dbd40e429782" UNIQUE ("name"), CONSTRAINT "PK_ba01cec5aa8ac48778a1d097e98" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(120) NOT NULL, "email" character varying(120) NOT NULL, "isAdmin" boolean NOT NULL DEFAULT false, "password" character varying(120) NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), "deletedAt" date, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "appointments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "date" date NOT NULL, "time" TIME NOT NULL, "userId" uuid, "clinicId" uuid, CONSTRAINT "PK_4a437a9a27e948726b8bb3e36ad" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "clinics" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "public" boolean NOT NULL DEFAULT true, "name" character varying(120) NOT NULL, "beds" integer NOT NULL DEFAULT '0', "partnerSince" date NOT NULL DEFAULT now(), "infosUpdateAt" date NOT NULL DEFAULT now(), "addressId" uuid, "specialtyId" uuid, CONSTRAINT "UQ_79dd2d4fc95a707b7248ebbeadb" UNIQUE ("name"), CONSTRAINT "REL_84cedd0702508727b620cd75a7" UNIQUE ("addressId"), CONSTRAINT "PK_5513b659e4d12b01a8ab3956abc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "addresses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "street" character varying(120) NOT NULL, "zip" character varying(8) NOT NULL, "city" character varying(50) NOT NULL, "state" character varying(2) NOT NULL, CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "appointments" ADD CONSTRAINT "FK_01733651151c8a1d6d980135cc4" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "appointments" ADD CONSTRAINT "FK_040a7ee2072d45bc98efddf3c02" FOREIGN KEY ("clinicId") REFERENCES "clinics"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "clinics" ADD CONSTRAINT "FK_84cedd0702508727b620cd75a76" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "clinics" ADD CONSTRAINT "FK_c2260f19c792aa31635bd629a6a" FOREIGN KEY ("specialtyId") REFERENCES "specialties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clinics" DROP CONSTRAINT "FK_c2260f19c792aa31635bd629a6a"`);
        await queryRunner.query(`ALTER TABLE "clinics" DROP CONSTRAINT "FK_84cedd0702508727b620cd75a76"`);
        await queryRunner.query(`ALTER TABLE "appointments" DROP CONSTRAINT "FK_040a7ee2072d45bc98efddf3c02"`);
        await queryRunner.query(`ALTER TABLE "appointments" DROP CONSTRAINT "FK_01733651151c8a1d6d980135cc4"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
        await queryRunner.query(`DROP TABLE "clinics"`);
        await queryRunner.query(`DROP TABLE "appointments"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "specialties"`);
    }

}
