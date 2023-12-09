import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.jwt_secret,
      signOptions: { expiresIn: '3600s' },
    }),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [AuthService, UserService],
  controllers: [AuthController],
})
export class AuthModule {}