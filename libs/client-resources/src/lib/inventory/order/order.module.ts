import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgrxDataService } from 'material/data-services';
import { CurrencyInputModule } from 'material/form/currency-input';
import { FormModule } from 'material/form/form.module';
import { SelectInputModule } from 'material/form/select-input';
import { TextInputModule } from 'material/form/text-input';
import { CheckboxInputModule } from 'material/form/checkbox-input';
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

import { ProductService } from '../product';

import { PricelevelService } from '../pricelevel';

import { TransactionService } from '../transaction';

import { RadioInputModule } from 'material/form/radio-input';
import { SwitchInputModule } from 'material/form/switch-input';
import { NumberInputModule } from 'material/form/number-input';

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
    TextInputModule,
    SelectInputModule,
    CurrencyInputModule,
    CheckboxInputModule,
    RadioInputModule,
    SwitchInputModule,
    NumberInputModule,
  ],

  providers: [
    OrderService,
    ConfirmationService,
    MessageService,
    CanWriteOrderGuard,
    CanReadOrderGuard,
    OrderFormService,

    ProductService,

    PricelevelService,

    TransactionService,

    {
      provide: NgrxDataService,
      useClass: OrderService,
    },
  ],
  exports: [],
})
export class OrderModule {}
