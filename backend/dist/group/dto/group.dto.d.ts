import { University } from 'src/university/entity/university.entity';
import { Group } from '../entity/group.entity';
export declare class CreateGroupDto {
    name: string;
    code: string;
    universityCode: string;
}
export declare class UpdateGroupDto extends CreateGroupDto {
    id: number;
}
export declare class RequestGroupDto {
    id: number;
    name: string;
    code: string;
    university: University;
    constructor(Group: Group);
}
