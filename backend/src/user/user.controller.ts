import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, RequestUserDto, UpdateUserDto } from './dto/user.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllUsers(): Promise<RequestUserDto[]> {
    return await this.userService.getAllUsers();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getUserById(@Param('id') id: number): Promise<RequestUserDto> {
    const user = await this.userService.getUserById(id);
    return new RequestUserDto(user);
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  async updateUser(@Body() userObject: UpdateUserDto): Promise<RequestUserDto> {
    return await this.userService.updateUser(userObject);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createUser(@Body() userObject: CreateUserDto) {
    return await this.userService.createUser(userObject);
  }
}
