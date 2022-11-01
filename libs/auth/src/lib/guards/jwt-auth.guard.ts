import { isPublicRoute } from 'ae-api-common';
import { Observable } from 'rxjs';

import {
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private readonly reflector: Reflector) {
    super();
  }

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    if (isPublicRoute(this.reflector, context)) {
      return true;
    }
    return super.canActivate(context);
  }
}
