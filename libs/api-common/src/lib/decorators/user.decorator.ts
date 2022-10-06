import { UserCookie } from 'commonjs';

import {
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';

export const GetUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): UserCookie => {
    const request = ctx.switchToHttp().getRequest();
    return request.user as UserCookie;
  }
);
