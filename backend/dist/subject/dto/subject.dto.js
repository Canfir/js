"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestSubjectDto = exports.UpdateSubjectDto = exports.CreateSubjectDto = void 0;
class CreateSubjectDto {
}
exports.CreateSubjectDto = CreateSubjectDto;
class UpdateSubjectDto extends CreateSubjectDto {
}
exports.UpdateSubjectDto = UpdateSubjectDto;
class RequestSubjectDto {
    constructor(Subject) {
        this.id = Subject.id;
        this.name = Subject.name;
        this.code = Subject.code;
    }
}
exports.RequestSubjectDto = RequestSubjectDto;
//# sourceMappingURL=subject.dto.js.map