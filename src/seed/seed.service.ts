import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { currenciesData, exchangeCurrencyData } from './data/seed-data';
import { ExchangeCurrency } from 'src/exchange/entities/exchange-currency.entity';
import { Currency } from 'src/exchange/entities/currency.entity';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(Currency)
    private readonly currencyRepository: Repository<Currency>,
    @InjectRepository(ExchangeCurrency)
    private readonly exchangeCurrencyRepository: Repository<ExchangeCurrency>,
  ) {}

  async seedData() {
    await this.seedCurrencies();
    await this.seedExchangeRates();
  }

  private async seedCurrencies() {
    try {
      await this.currencyRepository.save(currenciesData);
    } catch (err) {
      console.error(err.code);
    }
  }

  private async seedExchangeRates() {
    const currencies = await this.currencyRepository.find();

    const exchangeRates = exchangeCurrencyData.map(
      ({ base, target, rate }) => ({
        baseCurrency: currencies.find((c) => c.base === base),
        targetCurrency: currencies.find((c) => c.base === target),
        exchangeRate: rate,
        updated: new Date(),
      }),
    );

    await this.exchangeCurrencyRepository.save(exchangeRates);
  }
}
