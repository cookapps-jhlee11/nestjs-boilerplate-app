"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addedUserGender1661236698818 = void 0;
class addedUserGender1661236698818 {
    constructor() {
        this.name = 'addedUserGender1661236698818';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" ADD "gender" character varying`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "gender"`);
    }
}
exports.addedUserGender1661236698818 = addedUserGender1661236698818;
//# sourceMappingURL=1661236698818-added-user-gender.js.map