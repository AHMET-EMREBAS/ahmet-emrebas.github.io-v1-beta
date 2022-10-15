import {
  Permission,
  User,
} from 'models';
import { Repository } from 'typeorm';

import { Module } from '@nestjs/common';
import { OnModuleInit } from '@nestjs/common/interfaces';
import { JwtModule } from '@nestjs/jwt';
import {
  InjectRepository,
  TypeOrmModule,
} from '@nestjs/typeorm';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jtwOptions } from './jwt.constants';
import {
  JwtStrategy,
  LocalStrategy,
} from './strategies';

@Module({
  imports: [JwtModule.register(jtwOptions), TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [LocalStrategy, JwtStrategy, AuthService],
})
export class AuthModule implements OnModuleInit {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
    @InjectRepository(Permission)
    private readonly permissionRepo: Repository<Permission>
  ) {}
  async onModuleInit() {
    const rootuser = {
      username: 'root',
      password: 'password',
    };

    try {
      this.userRepo.findOneByOrFail({ username: 'root' });
    } catch (err) {
      this.userRepo.save(rootuser);
    }
  }
}
