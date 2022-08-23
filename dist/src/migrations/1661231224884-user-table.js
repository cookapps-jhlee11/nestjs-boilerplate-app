"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userTable1661231224884 = void 0;
class userTable1661231224884 {
    constructor() {
        this.name = 'userTable1661231224884';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TYPE "public"."user_roles_enum" AS ENUM('standard', 'premium')`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "address" character varying, "email" character varying NOT NULL, "password" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "roles" "public"."user_roles_enum" NOT NULL DEFAULT 'standard', CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TYPE "public"."user_roles_enum"`);
    }
}
exports.userTable1661231224884 = userTable1661231224884;
//# sourceMappingURL=1661231224884-user-table.js.map