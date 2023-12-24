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
exports.GroupService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const group_entity_1 = require("./entity/group.entity");
const typeorm_2 = require("typeorm");
const group_dto_1 = require("./dto/group.dto");
const university_service_1 = require("../university/university.service");
let GroupService = class GroupService {
    constructor(groupRepository, univerService) {
        this.groupRepository = groupRepository;
        this.univerService = univerService;
    }
    async getAllGroups(code) {
        const where = code ? { code: code } : {};
        const groups = await this.groupRepository.find({
            relations: ['university'],
            where: { university: where },
        });
        console.log(groups);
        return groups.map((group) => new group_dto_1.RequestGroupDto(group));
    }
    async getById(id) {
        const group = await this.groupRepository.findOne({
            where: { id },
            relations: ['university'],
        });
        return new group_dto_1.RequestGroupDto(group);
    }
    async getByCode(code) {
        const group = await this.groupRepository.findOne({
            where: { code },
            relations: ['university'],
        });
        return group;
    }
    async create(group) {
        const foundUniver = await this.univerService.getByCode(group.universityCode);
        const createdGroup = await this.groupRepository.create(group);
        createdGroup.university = foundUniver;
        const savedGroup = await this.groupRepository.save(createdGroup);
        return new group_dto_1.RequestGroupDto(savedGroup);
    }
    async removeById(id) {
        const result = await this.groupRepository.delete(id);
        return !!result.affected;
    }
};
exports.GroupService = GroupService;
exports.GroupService = GroupService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(group_entity_1.Group)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        university_service_1.UniversityService])
], GroupService);
//# sourceMappingURL=group.service.js.map