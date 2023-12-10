type Currencies = 'USD' | 'EUR' | 'JPY' | 'PEN';

interface CurrencyData {
  base: Currencies;
  description: string;
}

interface ExchangeRatesData extends CurrencyData {
  rate: number;
  target: Currencies;
}

export const currenciesData: CurrencyData[] = [
  {
    base: 'PEN',
    description: 'Peruvian Nuevo Sol (PEN). The official currency of Peru',
  },
  {
    base: 'USD',
    description:
      'United States Dollar (USD). The official currency of the United States',
  },
  {
    base: 'JPY',
    description: 'Japanese Yen (JPY). The official currency of Japan',
  },
  {
    base: 'EUR',
    description:
      'Euro (EUR). The official currency of the Eurozone, used by 19 of the 27 European Union member states',
  },
];

export const exchangeCurrencyData: ExchangeRatesData[] = [
  {
    base: 'PEN',
    description: 'Peruvian Nuevo Sol',
    rate: 0.24733,
    target: 'EUR',
  },
  {
    base: 'PEN',
    description: 'Peruvian Nuevo Sol',
    rate: 0.2662,
    target: 'USD',
  },
  {
    base: 'PEN',
    description: 'Peruvian Nuevo Sol',
    rate: 38.59721,
    target: 'JPY',
  },
  {
    base: 'USD',
    description: 'United States Dollar',
    rate: 0.92912,
    target: 'EUR',
  },
  {
    base: 'USD',
    description: 'United States Dollar',
    rate: 3.75657,
    target: 'PEN',
  },
  {
    base: 'USD',
    description: 'United States Dollar',
    rate: 144.99299,
    target: 'JPY',
  },
  {
    base: 'EUR',
    description: 'Euro',
    rate: 1.07628,
    target: 'USD',
  },
  {
    base: 'EUR',
    description: 'Euro',
    rate: 4.04313,
    target: 'PEN',
  },
  {
    base: 'EUR',
    description: 'Euro',
    rate: 156.05369,
    target: 'JPY',
  },
  {
    base: 'JPY',
    description: 'Japanese Yen',
    rate: 0.0069,
    target: 'USD',
  },
  {
    base: 'JPY',
    description: 'Japanese Yen',
    rate: 0.02591,
    target: 'PEN',
  },
  {
    base: 'JPY',
    description: 'Japanese Yen',
    rate: 0.00641,
    target: 'EUR',
  },
];
