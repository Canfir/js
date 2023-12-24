import { GroupService } from './group.service';
import { CreateGroupDto } from './dto/group.dto';
export declare class GroupController {
    private readonly groupService;
    constructor(groupService: GroupService);
    getAllGroups(code: string): Promise<import("./dto/group.dto").RequestGroupDto[]>;
    getAllGroupsByCode(id: number): Promise<import("./dto/group.dto").RequestGroupDto>;
    editGroup(univer: CreateGroupDto): Promise<import("./dto/group.dto").RequestGroupDto>;
    deleteGroup(id: number): Promise<boolean>;
}
