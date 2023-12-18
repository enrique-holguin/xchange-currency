import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
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

  @ApiProperty()
  @IsPositive()
  @IsNumber()
  @Type(() => Number)
  amount: number;
}
