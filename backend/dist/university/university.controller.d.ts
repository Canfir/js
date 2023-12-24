import { UniversityService } from './university.service';
import { CreateUniversityDto } from './dto/university.dto';
export declare class UniversityController {
    private readonly universityService;
    constructor(universityService: UniversityService);
    getAlluniversities(): Promise<import("./dto/university.dto").RequestUniversityDto[]>;
    editUniversity(univer: CreateUniversityDto): Promise<import("./dto/university.dto").RequestUniversityDto>;
    deleteUniversity(id: number): Promise<boolean>;
}
