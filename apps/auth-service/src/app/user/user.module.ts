import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Sub } from '../sub/entity/sub.entity';
import { User } from './entity/user.entity';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  imports: [TypeOrmModule.forFeature([User, Sub])],
})
export class UserModule {}
