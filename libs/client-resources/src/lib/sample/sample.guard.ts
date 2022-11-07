import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import {
  map,
  Observable,
} from 'rxjs';

import { SampleService } from './sample.service';

@Injectable()
export class CanCreateSample implements CanActivate {
  constructor(private readonly service: SampleService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.service.canActivate('create').pipe(
      map((data) => {
        return data;
      })
    );
  }
}

@Injectable()
export class CanReadSample implements CanActivate {
  constructor(private readonly service: SampleService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.service.canActivate('read').pipe(
      map((data) => {
        return data;
      })
    );
  }
}
