import { Subject } from '../entity/subject.entity';

export class CreateSubjectDto {
  name: string;
  code: string;
}

export class UpdateSubjectDto extends CreateSubjectDto {
  id: number;
}

export class RequestSubjectDto {
  id: number;
  name: string;
  code: string;

  constructor(Subject: Subject) {
    this.id = Subject.id;
    this.name = Subject.name;
    this.code = Subject.code;
  }
}
