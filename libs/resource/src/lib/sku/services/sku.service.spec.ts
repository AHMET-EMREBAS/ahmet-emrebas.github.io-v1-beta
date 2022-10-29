import {
  Test,
  TestingModule,
} from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Sku,
  SkuView,
} from '../entities';
import { SkuService } from './sku.service';

describe('SkuService', () => {
  let service: SkuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/sku/service-test.sqlite',
          autoLoadEntities: true,
          synchronize: true,
          dropSchema: true,
        }),
        TypeOrmModule.forFeature([Sku, SkuView]),
      ],
      providers: [SkuService],
    }).compile();

    service = module.get<SkuService>(SkuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
