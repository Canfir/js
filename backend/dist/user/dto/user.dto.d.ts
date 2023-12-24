import { User } from '../entity/user.entity';
export declare class CreateUserDto {
    fullName: string;
    birthDate: Date;
    login: string;
    password: string;
}
export declare class UpdateUserDto extends CreateUserDto {
    id: number;
}
export declare class RequestUserDto {
    id: number;
    fullName: string;
    birthDate: Date;
    login: string;
    constructor(user: User);
}
