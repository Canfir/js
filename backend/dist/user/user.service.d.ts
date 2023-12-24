import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto, RequestUserDto, UpdateUserDto } from './dto/user.dto';
import { LoginDto } from 'src/auth/dto/login.dto';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    getAllUsers(): Promise<RequestUserDto[]>;
    getUserById(id: number): Promise<User>;
    getUserByLogin(login: string): Promise<User>;
    updateUser(updateUser: UpdateUserDto): Promise<RequestUserDto>;
    createUser(userObject: CreateUserDto): Promise<RequestUserDto>;
    validateUser(loginDto: LoginDto): Promise<User>;
}
