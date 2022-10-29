import { ResourceMockService } from 'core';

import { NestApplication } from '@nestjs/core';
import {
  Test,
  TestingModule,
} from '@nestjs/testing';

import { SampleService } from '../services';
import { SampleController as Controller } from './sample.controller';

describe('SampleController', () => {
  let app: NestApplication;
  const service = new ResourceMockService();

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Controller],
      providers: [
        {
          provide: SampleService,
          useValue: service,
        },
      ],
    }).compile();

    app = module.createNestApplication();
    app.init();
  });

  afterAll(async () => await app.close());
});
