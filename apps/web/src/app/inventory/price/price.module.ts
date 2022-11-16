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

import { CreatePriceComponent } from './create-price/';
import { DeletePriceComponent } from './delete-price/';
import { PriceComponent } from './price.component';
import { PriceService } from './price.service';
import { UpdatePriceComponent } from './update-price/';
import { ViewPriceComponent } from './view-price';

import { SkuService } from '../sku';

import { PricelevelService } from '../pricelevel';

@NgModule({
  declarations: [
    PriceComponent,
    CreatePriceComponent,
    UpdatePriceComponent,
    DeletePriceComponent,
    ViewPriceComponent,
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
        component: PriceComponent,
        children: [
          {
            title: 'View Price',
            path: '',
            component: ViewPriceComponent,
          },
          {
            title: 'Create Price',
            path: 'create',
            component: CreatePriceComponent,
          },
          {
            title: 'Update Price',
            path: 'update',
            component: UpdatePriceComponent,
          },
          {
            title: 'Delete Price',
            path: 'delete',
            component: DeletePriceComponent,
          },
        ],
      },
    ]),
  ],
  providers: [
    PriceService,
    SkuService,
    PricelevelService,
    ConfirmationService,
    MessageService,
  ],
})
export class PriceModule {}
