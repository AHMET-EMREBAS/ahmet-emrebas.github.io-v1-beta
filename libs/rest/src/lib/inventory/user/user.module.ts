import { User, UserView } from 'models/inventory/user';

import { Permission } from 'models/inventory/permission';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserPostController } from './user-post.controller';
import { UserQueryController } from './user-query.controller';
import { UserService } from './user.service';
import { UserSubscriber } from './user.subscriber';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserView, Permission])],
  controllers: [UserQueryController, UserPostController],
  providers: [UserService, UserSubscriber],
})
export class UserModule {}
