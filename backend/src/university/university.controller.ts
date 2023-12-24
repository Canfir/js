import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UniversityService } from './university.service';
import { CreateUniversityDto, UpdateUniversityDto } from './dto/university.dto';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('university')
export class UniversityController {
  constructor(private readonly universityService: UniversityService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAlluniversities() {
    return await this.universityService.getAllUnivers();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async editUniversity(@Body() univer: CreateUniversityDto) {
    return await this.universityService.create(univer);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteUniversity(@Param('id') id: number) {
    return await this.universityService.removeById(id);
  }
}
