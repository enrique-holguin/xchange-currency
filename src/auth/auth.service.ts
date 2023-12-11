import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { UserPayload } from './interfaces/UserPayload';
import { LoginUser } from './interfaces/LoginUser';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}
  async validateUser(username: string, password: string) {
    const data = await this.userService.login({ username, password });
    return data;
  }

  async login(user: LoginUser) {
    const payload: UserPayload = {
      username: user.email,
      sub: {
        name: user.name,
      },
    };

    return {
      ...user,
      accesToken: this.jwtService.sign(payload),
    };
  }
}
