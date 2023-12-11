import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, Length } from 'class-validator';

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
  @IsNumber()
  amount: number;
}
