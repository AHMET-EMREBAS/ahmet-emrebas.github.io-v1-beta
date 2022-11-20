import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User, UserView } from './entity';

import { UserViewService } from './user-view.service';
import { UserController } from './user.controller';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { UserSubscriber } from './user.subscriber';

@Module({
  controllers: [UserController],
  imports: [TypeOrmModule.forFeature([User, UserView], 'inventory')],
  providers: [UserResolver, UserService, UserViewService, UserSubscriber],
})
export class UserModule {}
