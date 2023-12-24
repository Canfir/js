import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Subject } from './entity/subject.entity';
import { Repository } from 'typeorm';
import { CreateSubjectDto, RequestSubjectDto } from './dto/subject.dto';
import { StudentService } from 'src/student/student.service';
import { Grade } from './entity/grade.entity';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(Subject)
    private subjectRepository: Repository<Subject>,
    @InjectRepository(Grade)
    private gradeRepository: Repository<Grade>,
    private studentService: StudentService,
  ) {}

  async getAllSubjects(): Promise<RequestSubjectDto[]> {
    const subjects = await this.subjectRepository.find();
    return subjects.map((subject) => new RequestSubjectDto(subject));
  }

  async getByCode(code: string): Promise<RequestSubjectDto> {
    const subject = await this.subjectRepository.findOne({ where: { code } });
    return new RequestSubjectDto(subject);
  }

  async create(univer: CreateSubjectDto): Promise<RequestSubjectDto> {
    const createdSubject = await this.subjectRepository.save(univer);
    return new RequestSubjectDto(createdSubject);
  }

  async removeById(id: number) {
    const result = await this.subjectRepository.delete(id);
    return !!result.affected;
  }

  async addGrade(gradeinfo: {
    userId: number;
    subjectCode: string;
    grade: number;
  }) {
    const student = await this.studentService.getById(gradeinfo.userId);
    if (!student) throw new NotFoundException('Студент не найден');
    const subject = await this.getByCode(gradeinfo.subjectCode);
    if (!subject) throw new NotFoundException('Предмет не найден');
    const grade = { student, subject, grade: gradeinfo.grade };
    const result = this.gradeRepository.save(grade);
    return result;
  }

  async removeGradeById(id: number) {
    const result = await this.gradeRepository.delete(id);
    return !!result.affected;
  }
}
