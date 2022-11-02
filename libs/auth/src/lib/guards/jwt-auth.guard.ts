import { isPublic } from 'core';

import {
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(public readonly reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext): Promise<any> | any {
    if (isPublic(this.reflector, context)) {
      return true;
    }
    return super.canActivate(context);
  }
}
