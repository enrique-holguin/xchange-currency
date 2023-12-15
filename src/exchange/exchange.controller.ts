import {
  Controller,
  Post,
  UseGuards,
  Body,
  Get,
  Param,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { ExchangeService } from './exchange.service';
import { JwtGuard } from '../auth/guards/jwt-auth.guard';
import { ExchangeDto } from './dto/exchange.dto';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Currency } from './entities/currency.entity';

@ApiTags('Exchange')
@Controller('exchange')
export class ExchangeController {
  constructor(private readonly exchangeService: ExchangeService) {}
  @ApiBearerAuth('jwt')
  // @ApiBody({
  //   description: 'Exchange executed',
  //   type: ExchangeDto,
  // })
  @UseGuards(JwtGuard)
  @Get()
  async calculateExchange(
    @Query(
      new ValidationPipe({
        transform: true,
        transformOptions: { enableImplicitConversion: true },
        forbidNonWhitelisted: true,
      }),
    )
    query: ExchangeDto,
  ) {
    const result = await this.exchangeService.calculateExchange(query);
    return result;
  }
  @ApiBearerAuth('jwt')
  @ApiOkResponse({
    description: 'Retrieve the base and description of the currencies',
    type: Currency,
    isArray: true,
  })
  @UseGuards(JwtGuard)
  @Get('list')
  async getCurrencies() {
    const result = await this.exchangeService.getAllCurrencies();
    return result;
  }
}
