import { Student } from 'src/student/entity/student.entity';
import { Subject } from './subject.entity';
export declare class Grade {
    id: number;
    student: Student;
    subject: Subject;
    grade: number;
}
