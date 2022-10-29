import {
  Test,
  TestingModule,
} from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Img,
  ImgView,
} from '../entities';
import { ImgService } from './img.service';

describe('ImgService', () => {
  let service: ImgService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/img/service-test.sqlite',
          autoLoadEntities: true,
          synchronize: true,
          dropSchema: true,
        }),
        TypeOrmModule.forFeature([Img, ImgView]),
      ],
      providers: [ImgService],
    }).compile();

    service = module.get<ImgService>(ImgService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
