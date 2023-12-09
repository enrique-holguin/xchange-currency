import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { UserPayload } from './interfaces/userPayload';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}
  async validateUser(username: string, password: string) {
    const user = await this.userService.findOne(username);
    if (!user) {
      return null;
    }
    const isValidUser = await bcrypt.compare(password, user.password);
    if (isValidUser) {
      const { password, ...result } = user;
      return result;
    }
  }

  async login(user: User) {
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
