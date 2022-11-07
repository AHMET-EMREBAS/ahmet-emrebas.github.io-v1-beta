import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { Observable } from 'rxjs';

import { CategoryService } from './category.service';

@Injectable()
export class CanWriteCategoryGuard implements CanActivate {
  constructor(private readonly service: CategoryService) {}
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
export class CanReadCategoryGuard implements CanActivate {
  constructor(private readonly service: CategoryService) {}
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
