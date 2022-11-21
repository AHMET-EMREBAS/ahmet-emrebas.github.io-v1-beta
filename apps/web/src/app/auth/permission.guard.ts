import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { MessageService } from 'primeng/api';

import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class PermissionGuard implements CanActivate {
  constructor(
    private readonly messagService: MessageService,
    private readonly authService: AuthService
  ) {}
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    const requiredPermission = route.data['permission'];
    console.log('[PermissionGuard] required permission : ', requiredPermission);

    const canActivate = await this.authService.canActivate(requiredPermission);

    console.log('[PermissionGuard] can activate : ', canActivate);
    if (!canActivate) {
      this.messagService.add({
        key: 'auth',
        severity: 'error',
        summary: 'You are not autorized for this operation!',
      });
    }

    return canActivate;
  }
}
