import { User } from '../entity/user.entity';

export class CreateUserDto {
  fullName: string;
  birthDate: Date;
  login: string;
  password: string;
}

export class UpdateUserDto extends CreateUserDto {
  id: number;
}

export class RequestUserDto {
  id: number;
  fullName: string;
  birthDate: Date;
  login: string;

  constructor(user: User) {
    this.id = user.id;
    this.birthDate = user.birthDate;
    this.fullName = user.fullName;
    this.login = user.login;
  }
}
