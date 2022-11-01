import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {
  EXPIRES_IN,
  JWT_SECRET,
} from './jwt-options.const';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { Sub } from './sub/entity/sub.entity';
import { SubController } from './sub/sub.controller';
import { SubModule } from './sub/sub.module';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: JWT_SECRET,
      signOptions: {
        expiresIn: EXPIRES_IN,
      },
    }),
    TypeOrmModule.forFeature([Sub]),
    SubModule,
  ],
  controllers: [AuthController, SubController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
