"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsersDTO = void 0;
var class_validator_1 = require("class-validator");
var swagger_1 = require("@nestjs/swagger");
var UsersDTO = /** @class */ (function () {
    function UsersDTO() {
    }
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsEmail)(),
        (0, swagger_1.ApiProperty)({ example: 'jhlee11@cookapps.com', description: 'E-mail' })
    ], UsersDTO.prototype, "email");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsOptional)()
    ], UsersDTO.prototype, "address");
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({ example: 'Jeonghun Lee', description: 'The name of the user' })
    ], UsersDTO.prototype, "name");
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, swagger_1.ApiProperty)({ example: 'passw@rd', description: 'password of the user' }),
        (0, class_validator_1.IsString)()
    ], UsersDTO.prototype, "password");
    return UsersDTO;
}());
exports.UsersDTO = UsersDTO;
