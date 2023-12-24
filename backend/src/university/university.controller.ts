import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UniversityService } from './university.service';
import { CreateUniversityDto, UpdateUniversityDto } from './dto/university.dto';

@Controller('university')
export class UniversityController {
  constructor(private readonly universityService: UniversityService) {}

  @Get()
  async getAlluniversities() {
    return await this.universityService.getAllUnivers();
  }

  @Post()
  async editUniversity(@Body() univer: CreateUniversityDto) {
    return await this.universityService.create(univer);
  }

  @Delete(':id')
  async deleteUniversity(@Param('id') id: number) {
    return await this.universityService.removeById(id);
  }
}
