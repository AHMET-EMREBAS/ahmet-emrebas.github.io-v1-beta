import { Routes } from '@angular/router';

import { CategoryComponent } from './category.component';

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
        path: 'update',
        loadChildren: () =>
          import('./update-category').then((m) => m.UpdateCategoryModule),
      },
      {
        path: 'delete/:id',
        loadChildren: () =>
          import('./delete-category').then((m) => m.DeleteCategoryModule),
      },
    ],
  },
];
