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
import { ToolbarModule } from 'primeng/toolbar';

import { CategoryComponent } from './category.component';
import { CategoryService } from './category.service';
import {
  categoryRoutes,
  PermissionCheck,
} from './routes';

@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(categoryRoutes),
    ToolbarModule,
    DialogModule,
    MessageModule,
    ConfirmDialogModule,
    ToastModule,
    ButtonModule,
  ],
  providers: [
    CategoryService,
    ConfirmationService,
    MessageService,
    PermissionCheck,
  ],
})
export class CategoryModule {}
