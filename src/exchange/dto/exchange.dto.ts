import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, IsNumber, Length, IsPositive } from 'class-validator';

export class ExchangeDto {
  @ApiProperty({ example: 'PEN' })
  @IsString()
  @Length(3)
  from: string;

  @ApiProperty({ example: 'USD' })
  @IsString()
  @Length(3)
  to: string;

  @ApiProperty({ example: 20 })
  @IsPositive()
  @IsNumber()
  @Type(() => Number)
  amount: number;
}
