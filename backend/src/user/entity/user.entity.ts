import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  birthDate: Date;

  @Column({ unique: true })
  login: string;

  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;
}
