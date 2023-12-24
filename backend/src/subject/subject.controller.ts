import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { CreateSubjectDto } from './dto/Subject.dto';

@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Get()
  async getAlluniversities() {
    return await this.subjectService.getAllSubjects();
  }

  @Get(':code')
  async getAlluniversitiesByCode(@Param('code') code: string) {
    return await this.subjectService.getByCode(code);
  }

  @Post()
  async editSubject(@Body() univer: CreateSubjectDto) {
    return await this.subjectService.create(univer);
  }

  @Delete(':id')
  async deleteUniversity(@Param('id') id: number) {
    return await this.subjectService.removeById(id);
  }

  @Post('grade')
  async addGrade(
    @Body() gradeinfo: { userId: number; subjectCode: string; grade: number },
  ) {
    return this.subjectService.addGrade(gradeinfo);
  }

  @Post('grade/:id')
  async removeGrade(@Param('id') id: number) {
    return this.subjectService.removeGradeById(id);
  }
}
