import { University } from 'src/university/entity/university.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  name: string;

  @ManyToOne(() => University, (university) => university.groups)
  university: University;
}
