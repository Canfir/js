import { Module } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupController } from './group.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from './entity/group.entity';
import { UniversityModule } from 'src/university/university.module';

@Module({
  providers: [GroupService],
  controllers: [GroupController],
  imports: [TypeOrmModule.forFeature([Group]), UniversityModule],
  exports: [GroupService],
})
export class GroupModule {}
