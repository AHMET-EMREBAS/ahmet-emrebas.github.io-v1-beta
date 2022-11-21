import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { RouterModule } from '@angular/router';

import { SharedResourceModule } from 'material/resource';

import { PermissionGuard } from '../../auth';
import { CategoryComponent } from './category.component';
import { CategoryService } from './category.service';
import { CreateCategoryComponent } from './create-category/';
import { DeleteCategoryComponent } from './delete-category/';
import { UpdateCategoryComponent } from './update-category/';
import { ViewCategoryComponent } from './view-category';

@NgModule({
  declarations: [
    CategoryComponent,
    CreateCategoryComponent,
    UpdateCategoryComponent,
    DeleteCategoryComponent,
    ViewCategoryComponent,
  ],
  imports: [
    CommonModule,
    SharedResourceModule,
    MatStepperModule,
    RouterModule.forChild([
      {
        path: '',
        component: CategoryComponent,
        children: [
          {
            title: 'View Category',
            path: '',
            data: {
              permission: 'READ:CATEGORY',
            },
            component: ViewCategoryComponent,
            canActivate: [PermissionGuard],
          },
          {
            title: 'Create Category',
            path: 'create',
            data: {
              permission: 'WRITE:CATEGORY',
            },
            component: CreateCategoryComponent,
            canActivate: [PermissionGuard],
          },
          {
            title: 'Update Category',
            path: 'update',
            data: {
              permission: 'WRITE:CATEGORY',
            },
            component: UpdateCategoryComponent,
            canActivate: [PermissionGuard],
          },
          {
            title: 'Delete Category',
            path: 'delete',
            data: {
              permission: 'WRITE:CATEGORY',
            },
            component: DeleteCategoryComponent,
            canActivate: [PermissionGuard],
          },
        ],
      },
    ]),
  ],
  providers: [CategoryService],
})
export class CategoryModule {}
