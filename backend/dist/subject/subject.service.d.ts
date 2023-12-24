import { Subject } from './entity/subject.entity';
import { Repository } from 'typeorm';
import { CreateSubjectDto, RequestSubjectDto } from './dto/subject.dto';
import { StudentService } from 'src/student/student.service';
import { Grade } from './entity/grade.entity';
export declare class SubjectService {
    private subjectRepository;
    private gradeRepository;
    private studentService;
    constructor(subjectRepository: Repository<Subject>, gradeRepository: Repository<Grade>, studentService: StudentService);
    getAllSubjects(): Promise<RequestSubjectDto[]>;
    getByCode(code: string): Promise<RequestSubjectDto>;
    create(univer: CreateSubjectDto): Promise<RequestSubjectDto>;
    removeById(id: number): Promise<boolean>;
    addGrade(gradeinfo: {
        userId: number;
        subjectCode: string;
        grade: number;
    }): Promise<{
        student: import("../student/dto/student.dto").RequestStudentDto;
        subject: RequestSubjectDto;
        grade: number;
    } & Grade>;
    removeGradeById(id: number): Promise<boolean>;
}
