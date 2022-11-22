import {
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';

/**
 * User token content
 */
export const Sub = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    return context.switchToHttp().getRequest().user;
  }
);

/**
 * User token content's id
 */
export const SubId = createParamDecorator<number>(
  (data: unknown, context: ExecutionContext) => {
    return context.switchToHttp().getRequest().user.id;
  }
);
