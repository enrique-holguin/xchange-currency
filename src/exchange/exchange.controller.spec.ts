import { Test, TestingModule } from '@nestjs/testing';
import { ExchangeController } from './exchange.controller';
import { ExchangeService } from './exchange.service';
import { JwtGuard } from '../auth/guards/jwt-auth.guard';
import { ExchangeDto } from './dto/exchange.dto';
import { ResponseExchangeDto } from './dto/responseExchange.dto';

describe('ExchangeController', () => {
  let exchangeController: ExchangeController;
  let exchangeService: ExchangeService;

  const mockExchangeService = {
    calculateExchange: jest.fn(
      (exchangeDto: ExchangeDto): ResponseExchangeDto => {
        const exchangeRate = 0.8;
        return {
          amount: exchangeDto.amount,
          exchangedAmount: exchangeDto.amount * exchangeRate,
          from: exchangeDto.from,
          to: exchangeDto.to,
          exchangeRate,
        };
      },
    ),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExchangeService],
      controllers: [ExchangeController],
    })
      .overrideGuard(JwtGuard)
      .useValue(jest.fn().mockImplementation(() => true))
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
      const exchangeDtoMock: ExchangeDto = {
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
