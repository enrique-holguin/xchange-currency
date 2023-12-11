import { Controller, Post, UseGuards, Body } from '@nestjs/common';
import { ExchangeService } from './exchange.service';
import { JwtGuard } from '../auth/guards/jwt-auth.guard';
import { ExchangeDto } from './dto/exchange.dto';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Exchange')
@Controller('exchange')
export class ExchangeController {
  constructor(private readonly exchangeService: ExchangeService) {}
  @ApiBearerAuth('jwt')
  @ApiBody({
    description: 'Exchange executed',
    type: ExchangeDto,
  })
  @UseGuards(JwtGuard)
  @Post()
  async calculateExchange(@Body() exchangeDto: ExchangeDto) {
    const result = await this.exchangeService.calculateExchange(exchangeDto);
    return result;
  }
}
