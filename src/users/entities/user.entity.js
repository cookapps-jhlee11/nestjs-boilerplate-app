"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.User = void 0;
var typeorm_1 = require("typeorm");
var role_enum_1 = require("../enums/role.enum");
var swagger_1 = require("@nestjs/swagger");
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        (0, swagger_1.ApiProperty)({ example: 1, description: 'Auto-Created by DB' })
    ], User.prototype, "id");
    __decorate([
        (0, swagger_1.ApiProperty)({ example: 'Jeonghun Lee', description: 'The name of the user' }),
        (0, typeorm_1.Column)()
    ], User.prototype, "name");
    __decorate([
        (0, swagger_1.ApiProperty)({ example: 'Seoul-si', description: 'The address of the user' }),
        (0, typeorm_1.Column)({ nullable: true })
    ], User.prototype, "address");
    __decorate([
        (0, swagger_1.ApiProperty)({ example: 'male', description: 'The gender of the user' }),
        (0, typeorm_1.Column)({ nullable: true })
    ], User.prototype, "gender");
    __decorate([
        (0, swagger_1.ApiProperty)({ example: 'jhlee11@cookapps.com', description: 'E-mail' }),
        (0, typeorm_1.Column)()
    ], User.prototype, "email");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, swagger_1.ApiProperty)({ example: 'passw@rd', description: 'password of the user' })
    ], User.prototype, "password");
    __decorate([
        (0, typeorm_1.Column)({ "default": true }),
        (0, swagger_1.ApiProperty)({ example: true, description: '' })
    ], User.prototype, "isActive");
    __decorate([
        (0, typeorm_1.Column)({
            type: 'enum',
            "enum": role_enum_1.Role,
            "default": role_enum_1.Role.standard
        }),
        (0, swagger_1.ApiProperty)({ example: role_enum_1.Role, description: 'Users Role' })
    ], User.prototype, "roles");
    User = __decorate([
        (0, typeorm_1.Entity)(),
        (0, typeorm_1.Unique)(['email'])
    ], User);
    return User;
}());
exports.User = User;
