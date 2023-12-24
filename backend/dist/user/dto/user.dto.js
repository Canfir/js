"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestUserDto = exports.UpdateUserDto = exports.CreateUserDto = void 0;
class CreateUserDto {
}
exports.CreateUserDto = CreateUserDto;
class UpdateUserDto extends CreateUserDto {
}
exports.UpdateUserDto = UpdateUserDto;
class RequestUserDto {
    constructor(user) {
        this.id = user.id;
        this.birthDate = user.birthDate;
        this.fullName = user.fullName;
        this.login = user.login;
    }
}
exports.RequestUserDto = RequestUserDto;
//# sourceMappingURL=user.dto.js.map