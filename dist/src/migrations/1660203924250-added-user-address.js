"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addedUserAddress1660203924250 = void 0;
class addedUserAddress1660203924250 {
    constructor() {
        this.name = 'addedUserAddress1660203924250';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" ADD "address" character varying`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "address"`);
    }
}
exports.addedUserAddress1660203924250 = addedUserAddress1660203924250;
//# sourceMappingURL=1660203924250-added-user-address.js.map