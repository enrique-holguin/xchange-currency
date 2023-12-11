import { Controller, Post } from '@nestjs/common';
import { SeedService } from './seed.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Seed')
@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Post('data')
  async seedData() {
    await this.seedService.seedData();
    return { message: 'Seed data inserted successfully' };
  }
}
