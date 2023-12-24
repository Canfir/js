import { Group } from 'src/group/entity/group.entity';
import { Grade } from 'src/subject/entity/grade.entity';
export declare class Student {
    id: number;
    fullName: string;
    birthDate: Date;
    admissionYear: Date;
    grades: Grade[];
    group: Group;
}
