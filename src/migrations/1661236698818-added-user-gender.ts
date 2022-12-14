import {MigrationInterface, QueryRunner} from "typeorm";

export class addedUserGender1661236698818 implements MigrationInterface {
    name = 'addedUserGender1661236698818'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "gender" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "gender"`);
    }

}
