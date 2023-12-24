import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entity/student.entity';
import { Repository } from 'typeorm';
import { CreateStudentDto, RequestStudentDto } from './dto/student.dto';
import { GroupService } from 'src/group/group.service';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
    private groupService: GroupService,
  ) {}

  async getAllStudents(): Promise<RequestStudentDto[]> {
    const students = await this.studentRepository.find();
    return students.map((student) => new RequestStudentDto(student));
  }

  async getById(id: number): Promise<RequestStudentDto> {
    const student = await this.studentRepository.findOne({ where: { id } });
    return new RequestStudentDto(student);
  }

  async create(student: CreateStudentDto): Promise<RequestStudentDto> {
    const foundGroup = await this.groupService.getByCode(student.groupCode);
    const savedUser = this.studentRepository.create(student);
    savedUser.group = foundGroup;
    const createdStudent = await this.studentRepository.save(savedUser);
    return new RequestStudentDto(createdStudent);
  }

  async removeById(id: number) {
    const result = await this.studentRepository.delete(id);
    return !!result.affected;
  }
}
