import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/student.dto';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    getAllstudent(): Promise<import("./dto/student.dto").RequestStudentDto[]>;
    getAllstudentById(id: number): Promise<import("./dto/student.dto").RequestStudentDto>;
    editStudent(univer: CreateStudentDto): Promise<import("./dto/student.dto").RequestStudentDto>;
    deleteStudent(id: number): Promise<boolean>;
}
