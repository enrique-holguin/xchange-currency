import { Module } from '@nestjs/common';
import { ExchangeController } from './exchange.controller';
import { ExchangeService } from './exchange.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExchangeCurrency } from './entities/exchange-currency.entity';
import { Currency } from './entities/currency.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExchangeCurrency, Currency])],
  controllers: [ExchangeController],
  providers: [ExchangeService],
})
export class ExchangeModule {}
