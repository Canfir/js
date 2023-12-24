import { Module } from '@nestjs/common';
import { UniversityController } from './university.controller';
import { UniversityService } from './university.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { University } from './entity/university.entity';

@Module({
  controllers: [UniversityController],
  providers: [UniversityService],
  imports: [TypeOrmModule.forFeature([University])],
  exports: [UniversityService],
})
export class UniversityModule {}
