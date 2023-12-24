import { University } from './entity/university.entity';
import { Repository } from 'typeorm';
import { CreateUniversityDto, RequestUniversityDto } from './dto/university.dto';
export declare class UniversityService {
    private universityRepository;
    constructor(universityRepository: Repository<University>);
    getAllUnivers(): Promise<RequestUniversityDto[]>;
    getByCode(code: string): Promise<University>;
    create(univer: CreateUniversityDto): Promise<RequestUniversityDto>;
    removeById(id: number): Promise<boolean>;
}
