import { Student } from 'src/student/entity/student.entity';
import { University } from 'src/university/entity/university.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  code: string;

  @ManyToOne(() => University, (university) => university.groups, {
    nullable: false,
  })
  university: University;

  @OneToMany(() => Student, (student) => student.group)
  students: Student[];
}
