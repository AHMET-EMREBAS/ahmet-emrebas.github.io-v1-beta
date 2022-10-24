import { User } from 'models';
import { Repository } from 'typeorm';

import {
  Module,
  Optional,
} from '@nestjs/common';
import { OnModuleInit } from '@nestjs/common/interfaces';
import { JwtModule } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';

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
export class AuthModule implements OnModuleInit {
  constructor(
    @Optional()
    @InjectRepository(User)
    private readonly userRepo: Repository<User>
  ) {}
  async onModuleInit() {
    const rootuser = {
      username: 'root',
      password: 'password',
      permissions: 'admin, profile',
    };

    const found = await this.userRepo?.findOneBy({ username: 'root' });

    if (!found) {
      await this.userRepo?.save(rootuser);
    }
  }
}
