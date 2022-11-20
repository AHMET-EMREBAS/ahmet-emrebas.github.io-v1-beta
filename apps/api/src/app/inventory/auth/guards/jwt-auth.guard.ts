import {
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';

import { PUBLIC_RESOURCE_KEY } from '../decorators';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(public readonly reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext): Promise<any> | any {
    const isPublicResource = this.reflector.getAllAndOverride(
      PUBLIC_RESOURCE_KEY,
      [context.getHandler(), context.getClass()]
    );

    if (isPublicResource) {
      return true;
    }

    return super.canActivate(context);
  }
}
