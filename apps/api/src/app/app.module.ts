import {
  PriceLevel,
  Store,
  StoreView,
  User,
} from 'api-common';
import { ApiInventoryModule } from 'api-inventory';
import { Repository } from 'typeorm';

import {
  Module,
  OnModuleInit,
} from '@nestjs/common';
import {
  InjectRepository,
  TypeOrmModule,
} from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: './database/main.sqlite',
      entities: [User, PriceLevel, Store, StoreView],
      subscribers: [Store],
      synchronize: true,
      // dropSchema: true,
    }),
    TypeOrmModule.forFeature([Store, PriceLevel]),
    ApiInventoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  constructor(
    @InjectRepository(Store) private readonly storeRepo: Repository<Store>,
    @InjectRepository(PriceLevel)
    private readonly priceLevelRepo: Repository<Store>
  ) {}

  async onModuleInit() {
    const levelcount = await this.priceLevelRepo.count();

    if (levelcount < 10)
      for (let i = 0; i < 11; i++) {
        await this.priceLevelRepo.save({
          name: ~~(Math.random() * 10000000) + ' Level',
        });
      }

    const storecount = await this.storeRepo.count();

    if (storecount < 50)
      for (let i = 0; i < 50; i++) {
        await this.storeRepo.save({
          name: Math.random() * 10000000 + ' - Store',
          priceLevel: ~~(Math.random() + 5) as any,
        });
      }
  }
}
