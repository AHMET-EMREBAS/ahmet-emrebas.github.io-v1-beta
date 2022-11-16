import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedResourceModule } from 'material/resource';
import {
  ConfirmationService,
  MessageService,
} from 'primeng/api';

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
  providers: [CategoryService, ConfirmationService, MessageService],
})
export class CategoryModule {}
