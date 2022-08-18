"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcryptjs = require("bcryptjs");
const create_user_dto_1 = require("./dto/create-user.dto");
const user_entity_1 = require("./entities/user.entity");
const class_validator_1 = require("class-validator");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    create(createUserDto) {
        const user = new user_entity_1.User();
        user.name = createUserDto.name;
        user.email = createUserDto.email;
        user.password = createUserDto.password;
        return this.usersRepository.save(user);
    }
    async findAll() {
        return this.usersRepository.find();
    }
    async findOne(email) {
        let isOK = true;
        const res = await this.usersRepository.findOne({ email: email }).catch((error) => {
            console.log(error);
            isOK = false;
        });
        console.log(res);
        if (isOK) {
            return { status: 201, content: { msg: res } };
        }
        else {
            return { status: 400, content: { msg: 'User not found' } };
        }
    }
    async remove(id) {
        await this.usersRepository.delete(id);
    }
    async register(body) {
        let isOk = false;
        const userDTO = new create_user_dto_1.UsersDTO();
        userDTO.email = body.email;
        userDTO.name = body.name;
        userDTO.password = await bcryptjs.hash(body.password, 10);
        await (0, class_validator_1.validate)(userDTO).then((errors) => {
            if (errors.length > 0) {
                console.debug(`${errors}`);
            }
            else {
                isOk = true;
            }
        });
        if (isOk) {
            await this.create(userDTO).catch((error) => {
                console.debug(error.message);
                isOk = false;
            });
            if (isOk) {
                return { status: 201, content: { msg: 'User created with success' } };
            }
            else {
                return { status: 400, content: { msg: 'User already exists' } };
            }
        }
        else {
            return { status: 400, content: { msg: 'Invalid content' } };
        }
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map