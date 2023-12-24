import { Student } from './entity/student.entity';
import { Repository } from 'typeorm';
import { CreateStudentDto, RequestStudentDto } from './dto/student.dto';
import { GroupService } from 'src/group/group.service';
export declare class StudentService {
    private studentRepository;
    private groupService;
    constructor(studentRepository: Repository<Student>, groupService: GroupService);
    getAllStudents(): Promise<RequestStudentDto[]>;
    getById(id: number): Promise<RequestStudentDto>;
    create(student: CreateStudentDto): Promise<RequestStudentDto>;
    removeById(id: number): Promise<boolean>;
}
