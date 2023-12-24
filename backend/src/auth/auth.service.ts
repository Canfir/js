import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';
import { RequestUserDto } from 'src/user/dto/user.dto';
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const user = await this.userService.validateUser(loginDto);
    if (!user) throw new UnauthorizedException();
    const payload = { id: user.id, login: user.login };
    return {
      user: new RequestUserDto(user),
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
