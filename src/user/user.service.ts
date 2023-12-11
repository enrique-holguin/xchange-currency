import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { LoginUserDto } from './dto/login-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const isUserRegistered = await this.findOne(createUserDto.email);
    if (isUserRegistered)
      throw new BadRequestException('User already registered');
    const user = this.userRepo.create(createUserDto);
    return await this.userRepo.save(user);
  }

  findAll() {
    return `This action returns all user`;
  }

  async login(loginUserDto: LoginUserDto) {
    const user = await this.findOne(loginUserDto.username);
    if (!user) {
      return null;
    }
    const isValidUser = await bcrypt.compare(
      loginUserDto.password,
      user.password,
    );
    if (isValidUser) {
      const { password, ...result } = user;
      return result;
    }
  }

  async findOne(username: string) {
    return await this.userRepo.findOne({ where: { email: username } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
