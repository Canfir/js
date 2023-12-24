import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { GroupService } from './group.service';
import { CreateGroupDto, UpdateGroupDto } from './dto/group.dto';

@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Get()
  async getAllGroups(@Query('code') code: string) {
    console.log(code, 'code');
    return await this.groupService.getAllGroups(code);
  }

  @Get(':id')
  async getAllGroupsByCode(@Param('id') id: number) {
    return await this.groupService.getById(id);
  }

  @Post()
  async editGroup(@Body() univer: CreateGroupDto) {
    return await this.groupService.create(univer);
  }

  @Delete(':id')
  async deleteGroup(@Param('id') id: number) {
    return await this.groupService.removeById(id);
  }
}
