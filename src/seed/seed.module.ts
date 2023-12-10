import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExchangeCurrency } from 'src/exchange/entities/exchange-currency.entity';
import { Currency } from 'src/exchange/entities/currency.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExchangeCurrency, Currency])],
  providers: [SeedService],
  exports: [SeedService],
})
export class SeedModule {}
