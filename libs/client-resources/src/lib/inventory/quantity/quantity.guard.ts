import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { Observable } from 'rxjs';

import { QuantityService } from './quantity.service';

@Injectable()
export class CanWriteQuantityGuard implements CanActivate {
  constructor(private readonly service: QuantityService) {}
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
export class CanReadQuantityGuard implements CanActivate {
  constructor(private readonly service: QuantityService) {}
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
