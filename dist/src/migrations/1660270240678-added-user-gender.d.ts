import { MigrationInterface, QueryRunner } from "typeorm";
export declare class addedUserGender1660270240678 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
