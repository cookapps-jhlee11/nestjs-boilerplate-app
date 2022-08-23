import { MigrationInterface, QueryRunner } from "typeorm";
export declare class addedUserGender1661236698818 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
