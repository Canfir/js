import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    private readonly userService;
    constructor(authService: AuthService, userService: UserService);
    login(loginDto: LoginDto): Promise<{
        user: import("src/user/dto/user.dto").RequestUserDto;
        access_token: string;
    }>;
    register(user: CreateUserDto): Promise<import("src/user/dto/user.dto").RequestUserDto>;
}
