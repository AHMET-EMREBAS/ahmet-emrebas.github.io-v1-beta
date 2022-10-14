import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jtwOptions } from './jwt.constants';
import {
  JwtStrategy,
  LocalStrategy,
} from './strategies';

@Module({
  imports: [JwtModule.register(jtwOptions)],
  controllers: [AuthController],
  providers: [LocalStrategy, JwtStrategy, AuthService],
})
export class AeAuthModule {}
