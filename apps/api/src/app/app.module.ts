import {
  PriceLevel,
  Store,
  User,
} from 'api-common';
import { ApiInventoryModule } from 'api-inventory';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: './database/main.sqlite',
      entities: [User, PriceLevel, Store],
      synchronize: true,
    }),
    ApiInventoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
