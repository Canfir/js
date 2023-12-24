"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestStudentDto = exports.UpdateStudentDto = exports.CreateStudentDto = void 0;
class CreateStudentDto {
}
exports.CreateStudentDto = CreateStudentDto;
class UpdateStudentDto extends CreateStudentDto {
}
exports.UpdateStudentDto = UpdateStudentDto;
class RequestStudentDto {
    constructor(student) {
        this.id = student.id;
        this.birthDate = student.birthDate;
        this.fullName = student.fullName;
        this.admissionYear = student.admissionYear;
        this.group = student.group;
    }
}
exports.RequestStudentDto = RequestStudentDto;
//# sourceMappingURL=student.dto.js.map