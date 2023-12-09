import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
  async validateUser(id: string) {
    const user = await this.userService.findOne(id);
  }
}
