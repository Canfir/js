import { Student } from 'src/student/entity/student.entity';
import { University } from 'src/university/entity/university.entity';
export declare class Group {
    id: number;
    name: string;
    code: string;
    university: University;
    students: Student[];
}
