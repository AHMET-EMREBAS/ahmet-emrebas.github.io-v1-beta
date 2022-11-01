import { Observable } from 'rxjs';

import {
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';

export const IS_PUBLIC_META_KEY = 'Public';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private readonly reflector: Reflector) {
    super();
  }

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const isPublicResource = this.reflector.getAllAndOverride(
      IS_PUBLIC_META_KEY,
      [context.getClass, context.getHandler]
    );

    if (isPublicResource) {
      return true;
    }

    return super.canActivate(context);
  }
}
