import { Request } from 'express';
import {
  Column,
  DataSource,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

import {
  DynamicModule,
  Module,
  Scope,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ENTITIES } from './entities/entities';
import {
  InventoryResourceController,
  RESPOSITORY_TOKEN,
} from './inventory-resource.controller';

@Entity()
class Some {
  @PrimaryGeneratedColumn() id: number;
  @Column()
  some: string;
}

@Module({})
export class ApiInventoryModule {
  static configure(): DynamicModule {
    return {
      module: ApiInventoryModule,
      controllers: [InventoryResourceController],
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: './database/inventory.sqlite',
          autoLoadEntities: true,
          synchronize: true,
          dropSchema: true,
        }),
        TypeOrmModule.forFeature(ENTITIES),
      ],
      providers: [
        {
          scope: Scope.REQUEST,
          inject: ['REQUEST', DataSource],
          provide: RESPOSITORY_TOKEN,
          useFactory: (req: Request, datasource: DataSource) => {
            const { resource } = req.params;
            return datasource.getRepository(resource);
          },
        },
      ],
    };
  }
}
