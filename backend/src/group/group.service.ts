import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from './entity/group.entity';
import { Repository } from 'typeorm';
import { CreateGroupDto, RequestGroupDto } from './dto/group.dto';
import { StudentService } from 'src/student/student.service';
import { UniversityService } from 'src/university/university.service';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group)
    private groupRepository: Repository<Group>,
    private univerService: UniversityService,
  ) {}

  async getAllGroups(code?: string): Promise<RequestGroupDto[]> {
    const where = code ? { code: code } : {};
    const groups = await this.groupRepository.find({
      relations: ['university'],
      where: { university: where },
    });
    console.log(groups);
    return groups.map((group) => new RequestGroupDto(group));
  }

  async getById(id: number): Promise<RequestGroupDto> {
    const group = await this.groupRepository.findOne({
      where: { id },
      relations: ['university'],
    });
    return new RequestGroupDto(group);
  }

  async getByCode(code: string): Promise<Group> {
    const group = await this.groupRepository.findOne({
      where: { code },
      relations: ['university'],
    });
    return group;
  }

  async create(group: CreateGroupDto): Promise<RequestGroupDto> {
    const foundUniver = await this.univerService.getByCode(
      group.universityCode,
    );
    const createdGroup = await this.groupRepository.create(group);
    createdGroup.university = foundUniver;
    const savedGroup = await this.groupRepository.save(createdGroup);
    return new RequestGroupDto(savedGroup);
  }

  async removeById(id: number) {
    const result = await this.groupRepository.delete(id);
    return !!result.affected;
  }
}
