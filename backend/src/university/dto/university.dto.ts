import { University } from '../entity/university.entity';

export class CreateUniversityDto {
  name: string;
  code: string;
}

export class UpdateUniversityDto extends CreateUniversityDto {
  id: number;
}

export class RequestUniversityDto {
  id: number;
  name: string;
  code: string;

  constructor(university: University) {
    this.id = university.id;
    this.name = university.name;
    this.code = university.code;
  }
}
