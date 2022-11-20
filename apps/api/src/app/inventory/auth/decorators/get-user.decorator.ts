import { IReadUser } from 'common/inventory/interfaces/user';

import {
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';

export const GetUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    return context.switchToHttp().getRequest().user as IReadUser;
  }
);

export const UserID = createParamDecorator<number>(
  (data: unknown, context: ExecutionContext) => {
    return context.switchToHttp().getRequest().user.id;
  }
);
