import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/student.dto';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  async getAllstudent() {
    return await this.studentService.getAllStudents();
  }

  @Get(':id')
  async getAllstudentById(@Param('id') id: number) {
    return await this.studentService.getById(id);
  }

  @Post()
  async editStudent(@Body() univer: CreateStudentDto) {
    return await this.studentService.create(univer);
  }

  @Delete(':id')
  async deleteStudent(@Param('id') id: number) {
    return await this.studentService.removeById(id);
  }
}
