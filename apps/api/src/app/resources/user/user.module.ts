import { User, UserView } from 'models';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserViewController } from './user.view-controller';
import { UserViewService } from './user.view-service';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserView])],
  controllers: [UserController, UserViewController],
  providers: [UserService, UserViewService],
})
export class UserModule {}
