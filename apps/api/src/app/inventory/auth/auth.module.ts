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
  cp,
  ONS,
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
    private readonly us: UserService,
    private readonly ps: PermissionService
  ) {}

  async onModuleInit() {
    // Creating Super user

    const user = await this.us.save({
      username: 'aemrebas.dev@gmail.com',
      password: 'Aemrebas.dev1@gmail.com',
    });
    for (const r of [
      'user',
      'permission',
      'product',
      'store',
      'price',
      'quantity',
      'pricelevel',
      'message',
      'order',
      'transaction',
      'category',
      'department',
      'promotion',
      'sku',
    ]) {
      const R = await this.ps.save(cp(r, ONS.READ));
      const W = await this.ps.save(cp(r, ONS.WRITE));
      const M = await this.ps.save(cp(r, ONS.MANAGE));

      await this.us.add(user.id, R.id, 'permission');
      await this.us.add(user.id, W.id, 'permission');
      await this.us.add(user.id, M.id, 'permission');
    }

    for (const r of ['message', 'profile', '']) {
      const RO = await this.ps.save(cp(r, ONS.READ_OWN));
      const WO = await this.ps.save(cp(r, ONS.WRITE_OWN));
      const MO = await this.ps.save(cp(r, ONS.MANAGE_OWN));

      await this.us.add(user.id, RO.id, 'permission');
      await this.us.add(user.id, WO.id, 'permission');
      await this.us.add(user.id, MO.id, 'permission');
    }
  }
}
