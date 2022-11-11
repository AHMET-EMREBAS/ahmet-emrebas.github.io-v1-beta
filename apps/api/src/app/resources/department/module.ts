import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Rest } from './controller';
import { Model } from './entity';

@Module({
  imports: [TypeOrmModule.forFeature([Model])],
  controllers: [Rest],
})
export class ResourceModule {}
