import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { user } from '../example/user.example';

export class CreateUserDto {
  @ApiProperty({ example: user.name })
  @MinLength(3)
  @MaxLength(25)
  @IsString()
  name: string;
  @ApiProperty({ example: user.email })
  @IsEmail()
  @MinLength(8)
  @MaxLength(50)
  email: string;
  @ApiProperty({ example: user.password })
  @MinLength(6)
  @MaxLength(50)
  @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'The password must have a Uppercase, lowercase letter and a number',
  })
  password: string;
}
