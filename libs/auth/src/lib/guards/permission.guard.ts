import { ResourceService } from 'core/service';
import { Observable } from 'rxjs';

import {
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { IAuthUser } from '../auth-user';
import { JwtAuthGuard } from './jwt-auth.guard';

@Injectable()
export class PermissionGuard extends JwtAuthGuard {
  constructor(
    public readonly reflector: Reflector,
    @Inject('USER_SERVICE')
    private readonly userService: ResourceService<IAuthUser>
  ) {
    super(reflector);
  }

  async canActivate(
    context: ExecutionContext
  ): Promise<boolean | Observable<boolean>> {
    const isAuthenticated = await super.canActivate(context);

    if (isAuthenticated) {
      const userIds = context.switchToHttp().getRequest<Request>()[
        'user'
      ] as Partial<IAuthUser>;

      const user = await this.userService.findOneBy({
        id: userIds.id,
      });

      const requiredPermission = context.getHandler().name;

      if (user?.permission.find((e) => e.name === requiredPermission)) {
        return true;
      }
    }

    return false;
  }
}
