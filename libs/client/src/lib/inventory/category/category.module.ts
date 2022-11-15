import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormModule } from 'material/form';
import { TableModule } from 'material/table';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';

import { CreateCategoryComponent } from './create-category/';
import { DeleteCategoryComponent } from './delete-category/';
import { CategoryComponent } from './category.component';
import { CategoryService } from './category.service';
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
    TableModule,
    FormModule,
    ToolbarModule,
    ButtonModule,
    TooltipModule,
    ConfirmDialogModule,
    MessageModule,
    ToastModule,
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
            path: 'Create',
            component: CreateCategoryComponent,
          },
          {
            title: 'Update Category',
            path: 'Update',
            component: UpdateCategoryComponent,
          },
          {
            title: 'Delete Category',
            path: 'Delete',
            component: DeleteCategoryComponent,
          },
        ],
      },
    ]),
  ],
  providers: [CategoryService, ConfirmationService, MessageService],
})
export class CategoryModule {}
