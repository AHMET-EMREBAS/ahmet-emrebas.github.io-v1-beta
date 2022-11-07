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

import { CreatePriceComponent } from './create-price';
import { DeletePriceComponent } from './delete-price';
import { PriceFormService } from './price-form.service';
import { PriceRoutingModule } from './price-routing.module';
import { PriceComponent } from './price.component';
import { CanReadPriceGuard, CanWritePriceGuard } from './price.guard';
import { PriceService } from './price.service';
import { TableViewPriceComponent } from './table-view-price';
import { UpdatePriceComponent } from './update-price';

import { ProductService } from '../product';

@NgModule({
  declarations: [
    PriceComponent,
    TableViewPriceComponent,
    DeletePriceComponent,
    CreatePriceComponent,
    UpdatePriceComponent,
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
    PriceRoutingModule,
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
    PriceService,
    ConfirmationService,
    MessageService,
    CanWritePriceGuard,
    CanReadPriceGuard,
    PriceFormService,

    ProductService,

    {
      provide: NgrxDataService,
      useClass: PriceService,
    },
  ],
  exports: [],
})
export class PriceModule {}
