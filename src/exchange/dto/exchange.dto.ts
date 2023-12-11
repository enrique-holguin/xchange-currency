import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, Length, IsPositive } from 'class-validator';

export class ExchangeDto {
  @ApiProperty()
  @IsString()
  @Length(3)
  from: string;

  @ApiProperty()
  @IsString()
  @Length(3)
  to: string;

  @IsPositive()
  @ApiProperty()
  @IsNumber()
  amount: number;
}
