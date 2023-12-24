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
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const student_entity_1 = require("./entity/student.entity");
const typeorm_2 = require("typeorm");
const student_dto_1 = require("./dto/student.dto");
const group_service_1 = require("../group/group.service");
let StudentService = class StudentService {
    constructor(studentRepository, groupService) {
        this.studentRepository = studentRepository;
        this.groupService = groupService;
    }
    async getAllStudents() {
        const students = await this.studentRepository.find();
        return students.map((student) => new student_dto_1.RequestStudentDto(student));
    }
    async getById(id) {
        const student = await this.studentRepository.findOne({ where: { id } });
        return new student_dto_1.RequestStudentDto(student);
    }
    async create(student) {
        const foundGroup = await this.groupService.getByCode(student.groupCode);
        const savedUser = this.studentRepository.create(student);
        savedUser.group = foundGroup;
        const createdStudent = await this.studentRepository.save(savedUser);
        return new student_dto_1.RequestStudentDto(createdStudent);
    }
    async removeById(id) {
        const result = await this.studentRepository.delete(id);
        return !!result.affected;
    }
};
exports.StudentService = StudentService;
exports.StudentService = StudentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(student_entity_1.Student)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        group_service_1.GroupService])
], StudentService);
//# sourceMappingURL=student.service.js.map