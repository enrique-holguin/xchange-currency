import { IsString, IsNumber, Length } from 'class-validator';

export class ExchangeDto {
  @IsString()
  @Length(3)
  from: string;

  @Length(3)
  @IsString()
  to: string;

  @IsNumber()
  amount: number;
}
