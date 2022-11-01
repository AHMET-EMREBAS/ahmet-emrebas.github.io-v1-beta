import { Observable } from 'rxjs';
import { Repository } from 'typeorm';

import {
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { InjectRepository } from '@nestjs/typeorm';

import { hasPermission } from '../decorators/security-decorators';
import { Sub } from '../sub/entity/sub.entity';
import { JwtAuthGuard } from './jwt-auth.guard';

@Injectable()
export class PermissionGuard extends JwtAuthGuard {
  constructor(
    public readonly reflector: Reflector,
    @InjectRepository(Sub) public readonly userRepo: Repository<Sub>
  ) {
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
