import { IReadUser } from 'common/inventory/interfaces/user';
import { Request } from 'express';
import { Observable } from 'rxjs';

import {
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { UserService } from '../../rest/user';
import {
  hasPermission,
  PUBLIC_RESOURCE_KEY,
  RESOURCE_PERMISSION_KEY,
} from '../decorators';
import { JwtAuthGuard } from './jwt-auth.guard';

@Injectable()
export class PermissionGuard extends JwtAuthGuard {
  constructor(
    public readonly reflector: Reflector,
    private readonly userService: UserService
  ) {
    super(reflector);
  }

  async canActivate(
    context: ExecutionContext
  ): Promise<boolean | Observable<boolean>> {
    const isPublicResource = this.reflector.getAllAndOverride(
      PUBLIC_RESOURCE_KEY,
      [context.getHandler(), context.getClass()]
    );

    if (isPublicResource) {
      return true;
    }

    const isAuthenticated = await super.canActivate(context);

    if (isAuthenticated) {
      const userCookie = context.switchToHttp().getRequest<Request>()
        .user as IReadUser;

      const user = (await this.userService.findOneBy({
        id: userCookie.id,
      })) as unknown as IReadUser;

      const requiredPermission = this.reflector.getAllAndOverride(
        RESOURCE_PERMISSION_KEY,
        [context.getHandler(), context.getClass()]
      );

      if (hasPermission(user, requiredPermission)) {
        return true;
      }
    }

    return false;
  }
}
