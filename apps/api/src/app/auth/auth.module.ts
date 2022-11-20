import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Permission } from '../inventory/rest/permission';
import {
  User,
  UserService,
} from '../inventory/rest/user';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PermissionGuard } from './guards';
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
  providers: [
    AuthService,
    UserService,
    LocalStrategy,
    JwtStrategy,
    { provide: APP_GUARD, useClass: PermissionGuard },
  ],
})
export class AuthModule {}
