import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { University } from './entity/university.entity';
import { Repository } from 'typeorm';
import {
  CreateUniversityDto,
  RequestUniversityDto,
} from './dto/university.dto';

@Injectable()
export class UniversityService {
  constructor(
    @InjectRepository(University)
    private universityRepository: Repository<University>,
  ) {}

  async getAllUnivers(): Promise<RequestUniversityDto[]> {
    const univers = await this.universityRepository.find();
    return univers.map((univer) => new RequestUniversityDto(univer));
  }

  async getByCode(code: string): Promise<University> {
    const univer = await this.universityRepository.findOne({ where: { code } });
    if (!univer) throw new NotFoundException('Универ не найден');
    return univer;
  }

  async create(univer: CreateUniversityDto): Promise<RequestUniversityDto> {
    const createdUniver = await this.universityRepository.save(univer);
    return new RequestUniversityDto(createdUniver);
  }

  async removeById(id: number) {
    const result = await this.universityRepository.delete(id);
    return !!result.affected;
  }
}
