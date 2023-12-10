import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ExchangeModule } from './exchange/exchange.module';
import { SeedController } from './seed/seed.controller';
import { SeedModule } from './seed/seed.module';
import configDB from './ormConfig';

@Module({
  imports: [
    UserModule,
    AuthModule,
    TypeOrmModule.forRoot(configDB),
    ExchangeModule,
    SeedModule,
  ],
  controllers: [AppController, SeedController],
  providers: [AppService],
})
export class AppModule {}
