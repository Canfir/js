"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestUniversityDto = exports.UpdateUniversityDto = exports.CreateUniversityDto = void 0;
class CreateUniversityDto {
}
exports.CreateUniversityDto = CreateUniversityDto;
class UpdateUniversityDto extends CreateUniversityDto {
}
exports.UpdateUniversityDto = UpdateUniversityDto;
class RequestUniversityDto {
    constructor(university) {
        this.id = university.id;
        this.name = university.name;
        this.code = university.code;
    }
}
exports.RequestUniversityDto = RequestUniversityDto;
//# sourceMappingURL=university.dto.js.map