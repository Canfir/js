import { Group } from 'src/group/entity/group.entity';
import { Student } from '../entity/student.entity';
export declare class CreateStudentDto {
    fullName: string;
    birthDate: Date;
    groupCode: string;
    admissionYear: Date;
}
export declare class UpdateStudentDto extends CreateStudentDto {
    id: number;
}
export declare class RequestStudentDto {
    id: number;
    fullName: string;
    birthDate: Date;
    admissionYear: Date;
    group: Group;
    constructor(student: Student);
}
