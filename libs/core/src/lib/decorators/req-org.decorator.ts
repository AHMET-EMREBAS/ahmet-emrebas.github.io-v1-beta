import { IStoreEntity } from 'common';
import { Request } from 'express';

import {
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';

export function ReqStore() {
  return createParamDecorator((data: string, context: ExecutionContext) => {
    const req = context
      .switchToHttp()
      .getRequest<Request & { store: IStoreEntity }>();
    return req.store;
  });
}
