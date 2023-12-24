import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentService } from './student.service';
import { Student } from './entity/student.entity';
import { GroupModule } from 'src/group/group.module';

@Module({
  controllers: [StudentController],
  providers: [StudentService],
  imports: [TypeOrmModule.forFeature([Student]), GroupModule],
  exports: [StudentService],
})
export class StudentModule {}
