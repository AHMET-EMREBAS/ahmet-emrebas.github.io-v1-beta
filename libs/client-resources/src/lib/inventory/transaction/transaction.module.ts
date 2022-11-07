import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgrxDataService } from 'material/data-services';
import { CurrencyInputModule } from 'material/form/currency-input';
import { FormModule } from 'material/form/form.module';
import { SelectInputModule } from 'material/form/select-input';
import { TextInputModule } from 'material/form/text-input';
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

import { CreateTransactionComponent } from './create-transaction';
import { DeleteTransactionComponent } from './delete-transaction';
import { TransactionFormService } from './transaction-form.service';
import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionComponent } from './transaction.component';
import {
  CanReadTransactionGuard,
  CanWriteTransactionGuard,
} from './transaction.guard';
import { TransactionService } from './transaction.service';
import { TableViewTransactionComponent } from './table-view-transaction';
import { UpdateTransactionComponent } from './update-transaction';

@NgModule({
  declarations: [
    TransactionComponent,
    TableViewTransactionComponent,
    DeleteTransactionComponent,
    CreateTransactionComponent,
    UpdateTransactionComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    SharedModule,
    ButtonModule,
    ToolbarModule,
    ToastModule,
    MessageModule,
    MessagesModule,
    ResourceLayoutModule,
    TransactionRoutingModule,
    ClipboardModule,
    TooltipModule,
    ConfirmDialogModule,
    CardModule,
    FormModule,
    TextInputModule,
    SelectInputModule,
    CurrencyInputModule,
  ],

  providers: [
    TransactionService,
    ConfirmationService,
    MessageService,
    CanWriteTransactionGuard,
    CanReadTransactionGuard,
    TransactionFormService,

    {
      provide: NgrxDataService,
      useClass: TransactionService,
    },
  ],
  exports: [],
})
export class TransactionModule {}
