import { Group } from './entity/group.entity';
import { Repository } from 'typeorm';
import { CreateGroupDto, RequestGroupDto } from './dto/group.dto';
import { UniversityService } from 'src/university/university.service';
export declare class GroupService {
    private groupRepository;
    private univerService;
    constructor(groupRepository: Repository<Group>, univerService: UniversityService);
    getAllGroups(code?: string): Promise<RequestGroupDto[]>;
    getById(id: number): Promise<RequestGroupDto>;
    getByCode(code: string): Promise<Group>;
    create(group: CreateGroupDto): Promise<RequestGroupDto>;
    removeById(id: number): Promise<boolean>;
}
