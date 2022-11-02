import { hasPermission } from 'core';
import { Observable } from 'rxjs';

import {
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { JwtAuthGuard } from './jwt-auth.guard';

@Injectable()
export class PermissionGuard extends JwtAuthGuard {
  constructor(public readonly reflector: Reflector) {
    super(reflector);
  }

  async canActivate(
    context: ExecutionContext
  ): Promise<boolean | Observable<boolean>> {
    const isAuthenticated = await super.canActivate(context);

    if (isAuthenticated) {
      if (hasPermission(this.reflector, context)) {
        return true;
      }
    }
    return false;
  }
}
