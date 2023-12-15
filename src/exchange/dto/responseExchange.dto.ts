import { ApiProperty } from '@nestjs/swagger';
import { ExchangeDto } from './exchange.dto';

export class ResponseExchangeDto extends ExchangeDto {
  @ApiProperty()
  exchangeRate: number;
  @ApiProperty()
  exchangedAmount: number;
}
