"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addedUserGender1660270240678 = void 0;
class addedUserGender1660270240678 {
    constructor() {
        this.name = 'addedUserGender1660270240678';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" ADD "gender" character varying`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "gender"`);
    }
}
exports.addedUserGender1660270240678 = addedUserGender1660270240678;
//# sourceMappingURL=1660270240678-added-user-gender.js.map