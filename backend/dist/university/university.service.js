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
exports.UniversityService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const university_entity_1 = require("./entity/university.entity");
const typeorm_2 = require("typeorm");
const university_dto_1 = require("./dto/university.dto");
let UniversityService = class UniversityService {
    constructor(universityRepository) {
        this.universityRepository = universityRepository;
    }
    async getAllUnivers() {
        const univers = await this.universityRepository.find();
        return univers.map((univer) => new university_dto_1.RequestUniversityDto(univer));
    }
    async getByCode(code) {
        const univer = await this.universityRepository.findOne({ where: { code } });
        if (!univer)
            throw new common_1.NotFoundException('Универ не найден');
        return univer;
    }
    async create(univer) {
        const createdUniver = await this.universityRepository.save(univer);
        return new university_dto_1.RequestUniversityDto(createdUniver);
    }
    async removeById(id) {
        const result = await this.universityRepository.delete(id);
        return !!result.affected;
    }
};
exports.UniversityService = UniversityService;
exports.UniversityService = UniversityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(university_entity_1.University)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UniversityService);
//# sourceMappingURL=university.service.js.map