import { Body, Controller, Delete, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { GroupService } from './group.service';
import { CreateGroupDto, UpdateGroupDto } from './dto/group.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllGroups(@Query('code') code: string) {
    console.log(code, 'code');
    return await this.groupService.getAllGroups(code);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getAllGroupsByCode(@Param('id') id: number) {
    return await this.groupService.getById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async editGroup(@Body() univer: CreateGroupDto) {
    return await this.groupService.create(univer);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteGroup(@Param('id') id: number) {
    return await this.groupService.removeById(id);
  }
}
