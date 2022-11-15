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

import { CreateQuantityComponent } from './create-quantity/';
import { DeleteQuantityComponent } from './delete-quantity/';
import { QuantityComponent } from './quantity.component';
import { QuantityService } from './quantity.service';
import { UpdateQuantityComponent } from './update-quantity/';
import { ViewQuantityComponent } from './view-quantity';

import { SkuService } from '../sku';

import { StoreService } from '../store';

@NgModule({
  declarations: [
    QuantityComponent,
    CreateQuantityComponent,
    UpdateQuantityComponent,
    DeleteQuantityComponent,
    ViewQuantityComponent,
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
        component: QuantityComponent,
        children: [
          {
            title: 'View Quantity',
            path: '',
            component: ViewQuantityComponent,
          },
          {
            title: 'Create Quantity',
            path: 'create',
            component: CreateQuantityComponent,
          },
          {
            title: 'Update Quantity',
            path: 'update',
            component: UpdateQuantityComponent,
          },
          {
            title: 'Delete Quantity',
            path: 'delete',
            component: DeleteQuantityComponent,
          },
        ],
      },
    ]),
  ],
  providers: [
    QuantityService,
    SkuService,
    StoreService,
    ConfirmationService,
    MessageService,
  ],
})
export class QuantityModule {}
