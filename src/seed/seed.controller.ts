import { Controller, Post } from '@nestjs/common';
import { SeedService } from './seed.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Seed')
@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @ApiResponse({
    status: 200,
    description: 'Seed data inserted successfully',
  })
  @ApiResponse({ status: 500, description: 'Interal Server Error' })
  @Post('data')
  async seedData() {
    await this.seedService.seedData();
    return { message: 'Seed data inserted successfully' };
  }
}
