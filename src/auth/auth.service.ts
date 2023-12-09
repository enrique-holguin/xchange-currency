import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
  async validateUser(email: string, password: string) {
    const user = await this.userService.findOne(email);
    if (!user) {
      return null;
    }
    const isValidUser = await bcrypt.compare(password, user.password);
    if (isValidUser) {
      const { password, ...result } = user;
      return result;
    }
  }

  async login(user:User) {
    
  }
}
