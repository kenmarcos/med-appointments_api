import { MigrationInterface, QueryRunner } from "typeorm";

export class FixDateColumnTypes1702044949750 implements MigrationInterface {
    name = 'FixDateColumnTypes1702044949750'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "deletedAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "clinics" DROP COLUMN "partnerSince"`);
        await queryRunner.query(`ALTER TABLE "clinics" ADD "partnerSince" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "clinics" DROP COLUMN "infosUpdateAt"`);
        await queryRunner.query(`ALTER TABLE "clinics" ADD "infosUpdateAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clinics" DROP COLUMN "infosUpdateAt"`);
        await queryRunner.query(`ALTER TABLE "clinics" ADD "infosUpdateAt" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "clinics" DROP COLUMN "partnerSince"`);
        await queryRunner.query(`ALTER TABLE "clinics" ADD "partnerSince" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "deletedAt" date`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "updatedAt" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "createdAt" date NOT NULL DEFAULT now()`);
    }

}
