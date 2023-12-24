import { University } from 'src/university/entity/university.entity';
import { Group } from '../entity/group.entity';

export class CreateGroupDto {
  name: string;
  code: string;
  universityCode: string;
}

export class UpdateGroupDto extends CreateGroupDto {
  id: number;
}

export class RequestGroupDto {
  id: number;
  name: string;
  code: string;
  university: University;

  constructor(Group: Group) {
    this.id = Group.id;
    this.name = Group.name;
    this.code = Group.code;
    this.university = Group.university;
  }
}
