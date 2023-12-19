import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';
import { user } from '../example/user.example';

export class LoginUserDto {
  @ApiProperty({ example: user.email })
  @IsEmail()
  username: string;
  @ApiProperty({ example: user.password })
  @IsString()
  password: string;
}
