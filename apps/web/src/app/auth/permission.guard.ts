import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class PermissionGuard implements CanActivate {
  constructor(
    private readonly messagService: MessageService,
    private readonly authService: AuthService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    const requiredPermission = route.data['permission'];
    console.log('Required Permission : ', requiredPermission);

    const canActivate = this.authService.canActivate(requiredPermission);

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
