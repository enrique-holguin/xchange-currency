import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Currency } from './currency.entity';

@Entity()
export class ExchangeCurrency {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Currency)
  @JoinColumn({ name: 'base_currency_id' })
  baseCurrency: Currency;

  @ManyToOne(() => Currency)
  @JoinColumn({ name: 'target_currency_id' })
  targetCurrency: Currency;

  @Column()
  exchangeRate: number;

  @Column()
  updated: Date;
}
