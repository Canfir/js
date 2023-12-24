import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/student.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllstudent() {
    return await this.studentService.getAllStudents();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getAllstudentById(@Param('id') id: number) {
    return await this.studentService.getById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async editStudent(@Body() univer: CreateStudentDto) {
    return await this.studentService.create(univer);
  }
  
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteStudent(@Param('id') id: number) {
    return await this.studentService.removeById(id);
  }
}
