import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Category, CategoryView } from './entities';
import { CategoryService } from './category.service';

describe('CategoryService', () => {
  let service: CategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/category/service-test.sqlite',
          autoLoadEntities: true,
          synchronize: true,
          dropSchema: true,
        }),
        TypeOrmModule.forFeature([Category, CategoryView]),
      ],
      providers: [CategoryService],
    }).compile();

    service = module.get<CategoryService>(CategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
