import {
  Test,
  TestingModule,
} from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Pricelevel,
  PricelevelView,
} from '../entities';
import { PricelevelService } from './pricelevel.service';

describe('PricelevelService', () => {
  let service: PricelevelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/pricelevel/service-test.sqlite',
          autoLoadEntities: true,
          synchronize: true,
          dropSchema: true,
        }),
        TypeOrmModule.forFeature([Pricelevel, PricelevelView]),
      ],
      providers: [PricelevelService],
    }).compile();

    service = module.get<PricelevelService>(PricelevelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
