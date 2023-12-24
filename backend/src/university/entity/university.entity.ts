import { Group } from 'src/group/entity/group.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class University {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  code: string;

  @OneToMany(() => Group, (group) => group.university)
  groups: Group[];
}
