import { IUserEntity } from 'common';
import { Request } from 'express';

import {
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';

export const ReqUser = createParamDecorator(
  (data: string, context: ExecutionContext) => {
    const req = context
      .switchToHttp()
      .getRequest<Request & { user: IUserEntity }>();
    return req.user;
  }
);
