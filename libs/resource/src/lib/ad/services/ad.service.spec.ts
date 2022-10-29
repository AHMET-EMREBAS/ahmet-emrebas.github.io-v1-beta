import {
  Test,
  TestingModule,
} from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Ad,
  AdView,
} from '../entities';
import { AdService } from './ad.service';

describe('AdService', () => {
  let service: AdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/ad/service-test.sqlite',
          autoLoadEntities: true,
          synchronize: true,
          dropSchema: true,
        }),
        TypeOrmModule.forFeature([Ad, AdView]),
      ],
      providers: [AdService],
    }).compile();

    service = module.get<AdService>(AdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
