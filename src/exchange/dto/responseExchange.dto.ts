import { ApiProperty } from '@nestjs/swagger';
import { ExchangeDto } from './exchange.dto';

export class ResponseExchangeDto extends ExchangeDto {
  @ApiProperty({ example: 0.2662 })
  exchangeRate: number;
  @ApiProperty({ example: 5.324 })
  exchangedAmount: number;
}
