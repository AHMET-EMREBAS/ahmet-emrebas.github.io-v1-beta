import {
  Test,
  TestingModule,
} from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Sprint,
  SprintView,
} from '../entities';
import { SprintService } from './sprint.service';

describe('SprintService', () => {
  let service: SprintService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/sprint/service-test.sqlite',
          autoLoadEntities: true,
          synchronize: true,
          dropSchema: true,
        }),
        TypeOrmModule.forFeature([Sprint, SprintView]),
      ],
      providers: [SprintService],
    }).compile();

    service = module.get<SprintService>(SprintService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
