import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  ConfirmationService,
  MessageService,
} from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';

import { CategoryComponent } from './category.component';
import { CategoryService } from './category.service';

@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    DialogModule,
    MessageModule,
    ConfirmDialogModule,
    ToastModule,
    ButtonModule,
    RouterModule.forChild([
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
    ]),
  ],
  providers: [CategoryService, ConfirmationService, MessageService],
})
export class CategoryModule {}
