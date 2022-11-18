import { Request } from 'express';
import { DataSource } from 'typeorm';

import {
  Module,
  Scope,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import {
  Product,
  ProductController,
} from './product.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'main',
      database: 'temp/database/bridge.sqlite',
      type: 'better-sqlite3',
    }),
    TypeOrmModule.forRootAsync({
      inject: ['REQUEST'],
      useFactory: (req: Request) => {
        const org = req.query.org;
        return {
          type: 'better-sqlite3',
          autoLoadEntities: true,
          database: 'temp/database/' + org + '.sqlite',
        };
      },
    }),
    TypeOrmModule.forFeature([Product]),
  ],
  controllers: [AppController, ProductController],
  providers: [
    {
      scope: Scope.REQUEST,
      inject: ['REQUEST'],
      useExisting: false,
      provide: 'DataSource',
      useFactory: (req: Request) => {
        const org = req.query.org;
        console.log(org);
        return new DataSource({
          type: 'better-sqlite3',
          entities: [Product],
          database: 'temp/database/' + org + '.sqlite',
          synchronize: true,
        });
      },
    },
  ],
})
export class AppModule {}
