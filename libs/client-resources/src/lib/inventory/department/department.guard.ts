import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { Observable } from 'rxjs';

import { DepartmentService } from './department.service';

@Injectable()
export class CanWriteDepartmentGuard implements CanActivate {
  constructor(private readonly service: DepartmentService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.service.canActivate('WRITE');
  }
}

@Injectable()
export class CanReadDepartmentGuard implements CanActivate {
  constructor(private readonly service: DepartmentService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.service.canActivate('READ');
  }
}
