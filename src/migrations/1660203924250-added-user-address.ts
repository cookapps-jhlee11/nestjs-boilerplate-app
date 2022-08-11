import {MigrationInterface, QueryRunner} from "typeorm";

export class addedUserAddress1660203924250 implements MigrationInterface {
    name = 'addedUserAddress1660203924250'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "address" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "address"`);
    }

}
