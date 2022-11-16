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

import { CreateSkuComponent } from './create-sku/';
import { DeleteSkuComponent } from './delete-sku/';
import { SkuComponent } from './sku.component';
import { SkuService } from './sku.service';
import { UpdateSkuComponent } from './update-sku/';
import { ViewSkuComponent } from './view-sku';

import { ProductService } from '../product';

@NgModule({
  declarations: [
    SkuComponent,
    CreateSkuComponent,
    UpdateSkuComponent,
    DeleteSkuComponent,
    ViewSkuComponent,
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
        component: SkuComponent,
        children: [
          {
            title: 'View Sku',
            path: '',
            component: ViewSkuComponent,
          },
          {
            title: 'Create Sku',
            path: 'create',
            component: CreateSkuComponent,
          },
          {
            title: 'Update Sku',
            path: 'update',
            component: UpdateSkuComponent,
          },
          {
            title: 'Delete Sku',
            path: 'delete',
            component: DeleteSkuComponent,
          },
        ],
      },
    ]),
  ],
  providers: [SkuService, ProductService, ConfirmationService, MessageService],
})
export class SkuModule {}
