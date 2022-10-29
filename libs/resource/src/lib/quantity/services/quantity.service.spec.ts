import {
  Test,
  TestingModule,
} from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Quantity,
  QuantityView,
} from '../entities';
import { QuantityService } from './quantity.service';

describe('QuantityService', () => {
  let service: QuantityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/quantity/service-test.sqlite',
          autoLoadEntities: true,
          synchronize: true,
          dropSchema: true,
        }),
        TypeOrmModule.forFeature([Quantity, QuantityView]),
      ],
      providers: [QuantityService],
    }).compile();

    service = module.get<QuantityService>(QuantityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
