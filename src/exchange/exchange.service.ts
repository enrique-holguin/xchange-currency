import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExchangeCurrency } from './entities/exchange-currency.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ExchangeService {
  constructor(
    @InjectRepository(ExchangeCurrency)
    private readonly exchangeCurrencyRepository: Repository<ExchangeCurrency>,
  ) {}
}
