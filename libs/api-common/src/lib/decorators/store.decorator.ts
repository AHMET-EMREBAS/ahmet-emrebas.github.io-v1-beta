import { IStore } from 'commonjs';

import {
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';

export const GetStore = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): IStore => {
    const request = ctx.switchToHttp().getRequest();
    return request.store as IStore;
  }
);
