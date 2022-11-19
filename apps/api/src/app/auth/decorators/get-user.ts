import {
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';

import { IAuthUser } from '../auth-user';

export const GetUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    return context.switchToHttp().getRequest().user as IAuthUser;
  }
);
