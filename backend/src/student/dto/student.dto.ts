import { Group } from 'src/group/entity/group.entity';
import { Student } from '../entity/student.entity';

export class CreateStudentDto {
  fullName: string;
  birthDate: Date;
  groupCode: string;
  admissionYear: Date;
}

export class UpdateStudentDto extends CreateStudentDto {
  id: number;
}

export class RequestStudentDto {
  id: number;
  fullName: string;
  birthDate: Date;
  admissionYear: Date;
  group: Group;
  constructor(student: Student) {
    this.id = student.id;
    this.birthDate = student.birthDate;
    this.fullName = student.fullName;
    this.admissionYear = student.admissionYear;
    this.group = student.group;
  }
}
