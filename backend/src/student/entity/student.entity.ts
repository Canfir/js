import { Group } from 'src/group/entity/group.entity';
import { Grade } from 'src/subject/entity/grade.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  birthDate: Date;

  @Column()
  admissionYear: Date;

  @OneToMany(() => Grade, (grade) => grade.student)
  grades: Grade[];

  @ManyToOne(() => Group, (group) => group.students)
  group: Group;
}
