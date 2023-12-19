import { Controller, UseGuards, Get, Query } from '@nestjs/common';
import { ExchangeService } from './exchange.service';
import { JwtGuard } from '../auth/guards/jwt-auth.guard';
import { ExchangeDto } from './dto/exchange.dto';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Currency } from './entities/currency.entity';
import { ExchangeCurrency } from './entities/exchange-currency.entity';
import { ResponseExchangeDto } from './dto/responseExchange.dto';

@ApiTags('Exchange')
@Controller('exchange')
export class ExchangeController {
  constructor(private readonly exchangeService: ExchangeService) {}
  @ApiBearerAuth('jwt')
  @ApiOkResponse({
    description: 'Retrieve the base and description of the currencies',
    type: ResponseExchangeDto,
  })
  @UseGuards(JwtGuard)
  @Get()
  async calculateExchange(
    @Query()
    query: ExchangeDto,
  ) {
    const result = await this.exchangeService.calculateExchange(query);
    return result;
  }
  @ApiBearerAuth('jwt')
  @ApiOkResponse({
    description: 'Retrieve the base and description of the currencies',
    type: Currency,
    isArray: true,
  })
  @UseGuards(JwtGuard)
  @Get('list')
  async getCurrencies() {
    const result = await this.exchangeService.getAllCurrencies();
    return result;
  }
}
