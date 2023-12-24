import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto, RequestUserDto, UpdateUserDto } from './dto/user.dto';
import { compareSync, hashSync } from 'bcryptjs';
import { LoginDto } from 'src/auth/dto/login.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getAllUsers(): Promise<RequestUserDto[]> {
    const users = await this.userRepository.find();
    return users.map((user) => new RequestUserDto(user));
  }

  async getUserById(id: number): Promise<User> {
    return await this.userRepository.findOne({ where: { id } });
  }

  async getUserByLogin(login: string): Promise<User> {
    return await this.userRepository.findOne({ where: { login } });
  }

  async updateUser(updateUser: UpdateUserDto) {
    const foundUser = await this.getUserById(updateUser.id);
    if (!foundUser) throw new NotFoundException('Пользователь не найден');
    foundUser.birthDate = updateUser.birthDate;
    foundUser.fullName = updateUser.fullName;
    foundUser.login = updateUser.login;
    const result = await this.userRepository.save(foundUser);
    return new RequestUserDto(result);
  }

  async createUser(userObject: CreateUserDto): Promise<RequestUserDto> {
    if (userObject.password?.length < 8)
      throw new BadRequestException('Пароль меньше 8 символов');
    const hashedPassword = hashSync(userObject.password, 8);
    userObject.password = hashedPassword;
    const createdUser = await this.userRepository.save(userObject);
    if (createdUser) return new RequestUserDto(createdUser);
    throw new BadRequestException('Не удалось создать пользователя');
  }

  async validateUser(loginDto: LoginDto): Promise<User> {
    const user = await this.getUserByLogin(loginDto.login);
    if (!user) return null;
    if (!compareSync(loginDto.password, user.password)) return null;
    return user;
  }
}
