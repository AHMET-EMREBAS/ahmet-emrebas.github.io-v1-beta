import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgrxDataService } from 'material/data-services';

import { ResourceLayoutModule } from 'material/resource-layout';
import { TableModule } from 'material/table';
import { ConfirmationService, MessageService, SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';

import { CreateOrderComponent } from './create-order';
import { DeleteOrderComponent } from './delete-order';
import { OrderFormService } from './order-form.service';
import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { CanReadOrderGuard, CanWriteOrderGuard } from './order.guard';
import { OrderService } from './order.service';
import { TableViewOrderComponent } from './table-view-order';
import { UpdateOrderComponent } from './update-order';
import { FormModule } from 'material/form';

import { SkuService } from '../sku';

import { StoreService } from '../store';

import { TransactionService } from '../transaction';

import { NumberInputModule } from 'material/form/number-input';

import { CurrencyInputModule } from 'material/form/currency-input';

import { CheckboxInputModule } from 'material/form/checkbox-input';

import { SearchOneInputModule } from 'material/form/search-one-input';

@NgModule({
  declarations: [
    OrderComponent,
    TableViewOrderComponent,
    DeleteOrderComponent,
    CreateOrderComponent,
    UpdateOrderComponent,
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    TableModule,
    SharedModule,
    ButtonModule,
    ToolbarModule,
    ToastModule,
    MessageModule,
    MessagesModule,
    ResourceLayoutModule,
    ClipboardModule,
    TooltipModule,
    ConfirmDialogModule,
    CardModule,
    FormModule,

    NumberInputModule,

    CurrencyInputModule,

    CheckboxInputModule,

    SearchOneInputModule,
  ],

  providers: [
    OrderService,
    ConfirmationService,
    MessageService,
    CanWriteOrderGuard,
    CanReadOrderGuard,
    OrderFormService,

    SkuService,

    StoreService,

    TransactionService,

    {
      provide: NgrxDataService,
      useClass: OrderService,
    },
  ],
  exports: [],
})
export class OrderModule {}
