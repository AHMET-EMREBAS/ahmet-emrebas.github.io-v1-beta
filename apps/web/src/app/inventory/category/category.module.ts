import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CreateCategoryComponent } from './create-category/';
import { DeleteCategoryComponent } from './delete-category/';
import { CategoryComponent } from './category.component';
import { CategoryService } from './category.service';
import { UpdateCategoryComponent } from './update-category/';
import { ViewCategoryComponent } from './view-category';

import { SharedResourceModule } from 'material/resource';

import { MatStepperModule } from '@angular/material/stepper';

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
            component: ViewCategoryComponent,
          },
          {
            title: 'Create Category',
            path: 'create',
            component: CreateCategoryComponent,
          },
          {
            title: 'Update Category',
            path: 'update',
            component: UpdateCategoryComponent,
          },
          {
            title: 'Delete Category',
            path: 'delete',
            component: DeleteCategoryComponent,
          },
        ],
      },
    ]),
  ],
  providers: [CategoryService],
})
export class CategoryModule {}
