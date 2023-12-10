import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExchangeCurrency } from './entities/exchange-currency.entity';
import { Repository } from 'typeorm';
import { ExchangeDto } from './dto/exchange.dto';

@Injectable()
export class ExchangeService {
  constructor(
    @InjectRepository(ExchangeCurrency)
    private readonly exchangeCurrencyRepository: Repository<ExchangeCurrency>,
  ) {}
  async calculateExchange(data: ExchangeDto) {
    const { from, to, amount } = data;

    const baseCurrency = await this.exchangeCurrencyRepository.findOne({
      relations: ['baseCurrency', 'targetCurrency'],
      where: { baseCurrency: { base: from }, targetCurrency: { base: to } },
    });

    if (!baseCurrency) {
      throw new BadRequestException('Invalid currency pair');
    }

    const exchangedAmount = amount * baseCurrency.exchangeRate;

    return {
      amount,
      exchangedAmount,
      from: baseCurrency.baseCurrency.base,
      to: baseCurrency.targetCurrency.base,
      exchangeRate: baseCurrency.exchangeRate,
    };
  }
}
