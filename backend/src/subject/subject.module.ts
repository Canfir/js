import { Module } from '@nestjs/common';
import { SubjectController } from './subject.controller';
import { SubjectService } from './subject.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grade } from './entity/grade.entity';
import { Subject } from './entity/subject.entity';
import { StudentModule } from 'src/student/student.module';

@Module({
  providers: [SubjectService],
  controllers: [SubjectController],
  imports: [StudentModule, TypeOrmModule.forFeature([Subject, Grade])],
})
export class SubjectModule {}
