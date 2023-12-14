import { MigrationInterface, QueryRunner } from "typeorm";

export class AddNumberFieldToAddressTable1702576670336 implements MigrationInterface {
    name = 'AddNumberFieldToAddressTable1702576670336'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" ADD "number" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "number"`);
    }

}
