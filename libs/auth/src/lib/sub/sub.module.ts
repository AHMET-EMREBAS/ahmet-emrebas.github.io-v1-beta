import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Sub } from './entity/sub.entity';
import { SubController } from './sub.controller';

@Module({
  controllers: [SubController],
  imports: [TypeOrmModule.forFeature([Sub])],
})
export class SubModule {}
