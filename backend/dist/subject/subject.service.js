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
exports.SubjectService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const subject_entity_1 = require("./entity/subject.entity");
const typeorm_2 = require("typeorm");
const subject_dto_1 = require("./dto/subject.dto");
const student_service_1 = require("../student/student.service");
const grade_entity_1 = require("./entity/grade.entity");
let SubjectService = class SubjectService {
    constructor(subjectRepository, gradeRepository, studentService) {
        this.subjectRepository = subjectRepository;
        this.gradeRepository = gradeRepository;
        this.studentService = studentService;
    }
    async getAllSubjects() {
        const subjects = await this.subjectRepository.find();
        return subjects.map((subject) => new subject_dto_1.RequestSubjectDto(subject));
    }
    async getByCode(code) {
        const subject = await this.subjectRepository.findOne({ where: { code } });
        return new subject_dto_1.RequestSubjectDto(subject);
    }
    async create(univer) {
        const createdSubject = await this.subjectRepository.save(univer);
        return new subject_dto_1.RequestSubjectDto(createdSubject);
    }
    async removeById(id) {
        const result = await this.subjectRepository.delete(id);
        return !!result.affected;
    }
    async addGrade(gradeinfo) {
        const student = await this.studentService.getById(gradeinfo.userId);
        if (!student)
            throw new common_1.NotFoundException('Студент не найден');
        const subject = await this.getByCode(gradeinfo.subjectCode);
        if (!subject)
            throw new common_1.NotFoundException('Предмет не найден');
        const grade = { student, subject, grade: gradeinfo.grade };
        const result = this.gradeRepository.save(grade);
        return result;
    }
    async removeGradeById(id) {
        const result = await this.gradeRepository.delete(id);
        return !!result.affected;
    }
};
exports.SubjectService = SubjectService;
exports.SubjectService = SubjectService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(subject_entity_1.Subject)),
    __param(1, (0, typeorm_1.InjectRepository)(grade_entity_1.Grade)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        student_service_1.StudentService])
], SubjectService);
//# sourceMappingURL=subject.service.js.map