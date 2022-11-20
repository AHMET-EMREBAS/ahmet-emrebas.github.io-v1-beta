import {
  Module,
  OnModuleInit,
} from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Permission,
  PermissionService,
} from '../rest/permission';
import {
  User,
  UserService,
} from '../rest/user';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {
  createPermission,
  OperationNames,
} from './decorators';
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
    LocalStrategy,
    JwtStrategy,
    UserService,
    PermissionService,
    {
      provide: APP_GUARD,
      useClass: PermissionGuard,
    },
  ],
})
export class AuthModule implements OnModuleInit {
  constructor(
    private readonly userService: UserService,
    private readonly permissionService: PermissionService
  ) {}

  async onModuleInit() {
    // Guest1@gmail.com
    const user = await this.userService.save({
      username: 'Root1@root.com',
      password: 'Root1@root.com',
    });
    for (const r of ['user', 'permission']) {
      const RP = await this.permissionService.save(
        createPermission(r, OperationNames.WRITE)
      );
      const WP = await this.permissionService.save(
        createPermission(r, OperationNames.READ)
      );

      await this.userService.add(user.id, RP.id, 'permission');
      await this.userService.add(user.id, WP.id, 'permission');
    }
  }
}
