import { Request } from 'express';
import { DataSource } from 'typeorm';

import {
  Inject,
  Provider,
  Scope,
} from '@nestjs/common';

export const RESOURCE_REPOSITORY = 'RESOURCE_REPOSITORY';

export function InjectRepo() {
  return Inject(RESOURCE_REPOSITORY);
}

export function ProvideRepo(): Provider {
  return {
    scope: Scope.REQUEST,
    inject: ['REQUEST', DataSource],
    provide: RESOURCE_REPOSITORY,
    useFactory: (req: Request, dataSource: DataSource) => {
      const { resource } = req.params;
      return dataSource.getRepository(resource);
    },
  };
}
