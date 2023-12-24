"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestGroupDto = exports.UpdateGroupDto = exports.CreateGroupDto = void 0;
class CreateGroupDto {
}
exports.CreateGroupDto = CreateGroupDto;
class UpdateGroupDto extends CreateGroupDto {
}
exports.UpdateGroupDto = UpdateGroupDto;
class RequestGroupDto {
    constructor(Group) {
        this.id = Group.id;
        this.name = Group.name;
        this.code = Group.code;
        this.university = Group.university;
    }
}
exports.RequestGroupDto = RequestGroupDto;
//# sourceMappingURL=group.dto.js.map