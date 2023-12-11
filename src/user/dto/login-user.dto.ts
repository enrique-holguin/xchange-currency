import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class LoginUserDto {
  @ApiProperty()
  @IsEmail()
  username: string;
  @ApiProperty()
  @IsString()
  password: string;
}
