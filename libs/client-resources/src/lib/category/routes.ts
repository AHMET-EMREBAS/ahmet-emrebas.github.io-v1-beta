import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Routes,
  UrlTree,
} from '@angular/router';

import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';

import { CategoryComponent } from './category.component';

@Injectable({ providedIn: 'root' })
export class PermissionCheck implements CanActivate {
  constructor(private messageService: MessageService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    const permit = state.root.queryParamMap.get('p');

    const rPermit = state.root.paramMap.get('resource');

    return false;
  }
}
export const categoryRoutes: Routes = [
  {
    path: '',
    component: CategoryComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./view-category').then((m) => m.ViewCategoryModule),
      },
      {
        path: 'view/:id',
        loadChildren: () =>
          import('./detail-category').then((m) => m.DetailCategoryModule),
      },
      {
        path: 'create',
        loadChildren: () =>
          import('./create-category').then((m) => m.CreateCategoryModule),
      },
      {
        path: 'update/:id',
        loadChildren: () =>
          import('./update-category').then((m) => m.UpdateCategoryModule),
      },
      {
        path: 'delete/:id',
        loadChildren: () =>
          import('./delete-category').then((m) => m.DeleteCategoryModule),
        canActivate: [PermissionCheck],
      },
    ],
  },
];
