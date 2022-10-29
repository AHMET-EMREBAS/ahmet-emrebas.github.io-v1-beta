import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  UserController,
  UserOwnController,
} from './controllers';
import {
  User,
  UserSubscriber,
  UserView,
} from './entities';
import { UserService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserView])],
  controllers: [UserController, UserOwnController],
  providers: [UserService, UserSubscriber],
  exports: [UserService],
})
export class UserModule {}
