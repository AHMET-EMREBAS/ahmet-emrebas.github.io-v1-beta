import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateCategoryComponent } from './create-category';
import { DeleteCategoryComponent } from './delete-category';
import { CategoryComponent } from './category.component';
import { CanReadCategoryGuard, CanWriteCategoryGuard } from './category.guard';
import { TableViewCategoryComponent } from './table-view-category';
import { UpdateCategoryComponent } from './update-category';

export const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,

    children: [
      {
        title: 'View Category',
        path: 'table-view',
        component: TableViewCategoryComponent,
        canActivate: [CanReadCategoryGuard],
      },
      {
        title: 'Create Category',
        path: 'create',
        component: CreateCategoryComponent,
        canActivate: [CanWriteCategoryGuard],
      },
      {
        title: 'Update Category',
        path: 'update/:id',
        component: UpdateCategoryComponent,
      },
      {
        title: 'Delete Category ',
        path: 'delete/:id',
        component: DeleteCategoryComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
