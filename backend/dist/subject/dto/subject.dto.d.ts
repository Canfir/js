import { Subject } from '../entity/subject.entity';
export declare class CreateSubjectDto {
    name: string;
    code: string;
}
export declare class UpdateSubjectDto extends CreateSubjectDto {
    id: number;
}
export declare class RequestSubjectDto {
    id: number;
    name: string;
    code: string;
    constructor(Subject: Subject);
}
