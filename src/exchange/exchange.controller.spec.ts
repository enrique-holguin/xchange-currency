import { Test, TestingModule } from '@nestjs/testing';
import { ExchangeController } from './exchange.controller';
import { ExchangeService } from './exchange.service';
import { JwtGuard } from '../auth/guards/jwt-auth.guard';

describe('ExchangeController', () => {
  let exchangeController: ExchangeController;
  let exchangeService: ExchangeService;

  interface ExchangeDtoMock {
    from: string;
    to: string;
    amount: number;
  }
  interface CalculateExchange extends ExchangeDtoMock {
    exchangedAmount: number;
    exchangeRate: number;
  }

  const mockExchangeService = {
    calculateExchange: jest.fn(
      (exchangeDto: ExchangeDtoMock): CalculateExchange => ({
        amount: exchangeDto.amount,
        exchangedAmount: exchangeDto.amount * 0.8,
        from: exchangeDto.from,
        to: exchangeDto.to,
        exchangeRate: 0.8,
      }),
    ),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ExchangeService,
        {
          provide: JwtGuard,
          useValue: jest.fn().mockImplementation(() => true),
        },
      ],
      controllers: [ExchangeController],
    })
      .overrideProvider(ExchangeService)
      .useValue(mockExchangeService)
      .compile();

    exchangeController = module.get<ExchangeController>(ExchangeController);
    exchangeService = module.get<ExchangeService>(ExchangeService);
  });

  it('should be defined', () => {
    expect(exchangeController).toBeDefined();
  });

  describe('calculateExchange', () => {
    it('should call calculateExchange method of ExchangeService', async () => {
      const exchangeDtoMock = {
        from: 'USD',
        to: 'EUR',
        amount: 100,
      };

      await exchangeController.calculateExchange(exchangeDtoMock);

      console.log(
        'Resultado de calculateExchange:',
        mockExchangeService.calculateExchange.mock.results,
      );

      expect(mockExchangeService.calculateExchange).toHaveBeenCalledWith(
        exchangeDtoMock,
      );
    });
  });
});
