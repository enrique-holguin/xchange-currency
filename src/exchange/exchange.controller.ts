import { Controller, Post, UseGuards, Body } from '@nestjs/common';
import { ExchangeService } from './exchange.service';
import { JwtGuard } from '../auth/guards/jwt-auth.guard';
import { ExchangeDto } from './dto/exchange.dto';

@Controller('exchange')
export class ExchangeController {
  constructor(private readonly exchangeService: ExchangeService) {}
  @UseGuards(JwtGuard)
  @Post()
  async calculateExchange(@Body() exchangeDto: ExchangeDto) {
    const result = await this.exchangeService.calculateExchange(exchangeDto);
    return result;
  }
}
