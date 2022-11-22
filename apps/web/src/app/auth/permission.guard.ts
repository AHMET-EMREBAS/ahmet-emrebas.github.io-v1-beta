import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { MessageService } from 'primeng/api';

import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class PermissionGuard implements CanActivate {
  constructor(
    private readonly messagService: MessageService,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    const requiredPermission = route.data['permission'];
    const isLogin = await this.authService.isLogin();

    if (!isLogin) {
      this.router.navigate(['/']);
      return false;
    }

    const canActivate = await this.authService.canActivate(requiredPermission);

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
