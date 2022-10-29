import {
  Test,
  TestingModule,
} from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Sample,
  SampleView,
} from '../entities';
import { SampleService } from './sample.service';

describe('SampleService', () => {
  let service: SampleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/sample/service-test.sqlite',
          autoLoadEntities: true,
          synchronize: true,
          dropSchema: true,
        }),
        TypeOrmModule.forFeature([Sample, SampleView]),
      ],
      providers: [SampleService],
    }).compile();

    service = module.get<SampleService>(SampleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
