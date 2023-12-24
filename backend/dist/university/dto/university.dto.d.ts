import { University } from '../entity/university.entity';
export declare class CreateUniversityDto {
    name: string;
    code: string;
}
export declare class UpdateUniversityDto extends CreateUniversityDto {
    id: number;
}
export declare class RequestUniversityDto {
    id: number;
    name: string;
    code: string;
    constructor(university: University);
}
