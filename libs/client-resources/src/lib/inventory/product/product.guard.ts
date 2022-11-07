import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { Observable } from 'rxjs';

import { ProductService } from './product.service';

@Injectable()
export class CanWriteProductGuard implements CanActivate {
  constructor(private readonly service: ProductService) {}
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
export class CanReadProductGuard implements CanActivate {
  constructor(private readonly service: ProductService) {}
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
