import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Permission } from '../inventory/models/permission';
import { User } from '../inventory/models/user';
import { UserService } from '../inventory/rest/user';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {
  EXPIRES_IN,
  JWT_SECRET,
} from './jwt-options.const';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
    PassportModule,
    TypeOrmModule.forFeature([User, Permission]),
    JwtModule.register({
      secret: JWT_SECRET,
      signOptions: {
        expiresIn: EXPIRES_IN,
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy, UserService],
})
export class AuthModule {}
