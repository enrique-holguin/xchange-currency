import { IsString, IsNumber, Length } from 'class-validator';

export class ExchangeDto {
  @IsString()
  @Length(3)
  from: string;

  @IsString()
  @Length(3)
  to: string;

  @IsNumber()
  amount: number;
}
