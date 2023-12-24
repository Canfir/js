import { UserService } from './user.service';
import { CreateUserDto, RequestUserDto, UpdateUserDto } from './dto/user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAllUsers(): Promise<RequestUserDto[]>;
    getUserById(id: number): Promise<RequestUserDto>;
    updateUser(userObject: UpdateUserDto): Promise<RequestUserDto>;
    createUser(userObject: CreateUserDto): Promise<RequestUserDto>;
}
