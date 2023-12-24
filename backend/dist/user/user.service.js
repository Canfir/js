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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entity/user.entity");
const typeorm_2 = require("typeorm");
const user_dto_1 = require("./dto/user.dto");
const bcryptjs_1 = require("bcryptjs");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async getAllUsers() {
        const users = await this.userRepository.find();
        return users.map((user) => new user_dto_1.RequestUserDto(user));
    }
    async getUserById(id) {
        return await this.userRepository.findOne({ where: { id } });
    }
    async getUserByLogin(login) {
        return await this.userRepository.findOne({ where: { login } });
    }
    async updateUser(updateUser) {
        const foundUser = await this.getUserById(updateUser.id);
        if (!foundUser)
            throw new common_1.NotFoundException('Пользователь не найден');
        foundUser.birthDate = updateUser.birthDate;
        foundUser.fullName = updateUser.fullName;
        foundUser.login = updateUser.login;
        const result = await this.userRepository.save(foundUser);
        return new user_dto_1.RequestUserDto(result);
    }
    async createUser(userObject) {
        if (userObject.password?.length < 8)
            throw new common_1.BadRequestException('Пароль меньше 8 символов');
        const hashedPassword = (0, bcryptjs_1.hashSync)(userObject.password, 8);
        userObject.password = hashedPassword;
        const createdUser = await this.userRepository.save(userObject);
        if (createdUser)
            return new user_dto_1.RequestUserDto(createdUser);
        throw new common_1.BadRequestException('Не удалось создать пользователя');
    }
    async validateUser(loginDto) {
        const user = await this.getUserByLogin(loginDto.login);
        if (!user)
            return null;
        if (!(0, bcryptjs_1.compareSync)(loginDto.password, user.password))
            return null;
        return user;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map