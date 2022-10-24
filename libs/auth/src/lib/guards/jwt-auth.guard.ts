import {
  getRequiredPermission,
  isPublicRoute,
} from 'api-core';
import { Request } from 'express';
import { User } from 'models';

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

  async canActivate(context: ExecutionContext): Promise<any> {
    const req = context.switchToHttp().getRequest<Request>();
    const requiredPermission = getRequiredPermission(this.reflector, context);

    console.table({ cookies: req.cookies });

    if (isPublicRoute(this.reflector, context)) {
      return true;
    }
    let activated: boolean;

    try {
      activated = (await super.canActivate(context)) as boolean;
    } catch (err) {
      activated = false;
    }

    const user = req?.user as User;

    console.table({
      requiredPermission,
      userPermission: user?.permissions,
    });
    if (requiredPermission) {
      if (user?.permissions.includes('admin')) {
        return true;
      }

      if (user?.permissions?.includes(requiredPermission)) {
        return true;
      } else {
        return false;
      }
    }

    return activated;
  }
}
