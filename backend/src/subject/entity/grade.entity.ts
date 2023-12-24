import { Student } from 'src/student/entity/student.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Subject } from './subject.entity';

@Entity()
export class Grade {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Student, (student) => student.grades)
  student: Student;

  @ManyToOne(() => Subject)
  subject: Subject;

  @Column()
  grade: number;
}
