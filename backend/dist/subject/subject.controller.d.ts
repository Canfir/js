import { SubjectService } from './subject.service';
import { CreateSubjectDto } from './dto/Subject.dto';
export declare class SubjectController {
    private readonly subjectService;
    constructor(subjectService: SubjectService);
    getAlluniversities(): Promise<import("./dto/Subject.dto").RequestSubjectDto[]>;
    getAlluniversitiesByCode(code: string): Promise<import("./dto/Subject.dto").RequestSubjectDto>;
    editSubject(univer: CreateSubjectDto): Promise<import("./dto/Subject.dto").RequestSubjectDto>;
    deleteUniversity(id: number): Promise<boolean>;
    addGrade(gradeinfo: {
        userId: number;
        subjectCode: string;
        grade: number;
    }): Promise<{
        student: import("../student/dto/student.dto").RequestStudentDto;
        subject: import("./dto/Subject.dto").RequestSubjectDto;
        grade: number;
    } & import("./entity/grade.entity").Grade>;
    removeGrade(id: number): Promise<boolean>;
}
