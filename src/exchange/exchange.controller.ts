import { Controller, Post, UseGuards } from '@nestjs/common';
import { ExchangeService } from './exchange.service';
import { JwtGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('exchange')
export class ExchangeController {
  constructor(private readonly exchangeService: ExchangeService) {}
  @UseGuards(JwtGuard)
  @Post()
  calculateExchange() {
    return 'autorizado';
  }
}
