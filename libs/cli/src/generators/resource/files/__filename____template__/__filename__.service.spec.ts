import {
  Test,
  TestingModule,
} from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  <%= classname %>,
  <%= classname %>View,
} from './entities';
import { <%= classname %>Service } from './<%= filename %>.service';

describe('<%= classname %>Service', () => {
  let service: <%= classname %>Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/<%= filename %>/service-test.sqlite',
          autoLoadEntities: true,
          synchronize: true,
          dropSchema: true,
        }),
        TypeOrmModule.forFeature([<%= classname %>, <%= classname %>View]),
      ],
      providers: [<%= classname %>Service],
    }).compile();

    service = module.get<<%= classname %>Service>(<%= classname %>Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
