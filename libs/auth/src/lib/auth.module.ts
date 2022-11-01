import { ClassConstructor } from 'class-transformer';

import {
  DynamicModule,
  Module,
} from '@nestjs/common';
import {
  JwtModule,
  JwtModuleOptions,
} from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AuthUserService } from './auth-user.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { IUser } from './user.interface';

@Module({
  imports: [PassportModule],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {
  static configure(
    jwtOptions: JwtModuleOptions,
    authUserService: ClassConstructor<AuthUserService<IUser>>
  ): DynamicModule {
    return {
      module: AuthModule,
      imports: [JwtModule.register(jwtOptions)],
      providers: [
        {
          provide: AuthUserService,
          useClass: authUserService,
        },
        {
          provide: 'JWT_OPTIONS',
          useValue: jwtOptions,
        },
      ],
    };
  }
}
