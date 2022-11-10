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

import { CreateQuantityComponent } from './create-quantity';
import { DeleteQuantityComponent } from './delete-quantity';
import { QuantityFormService } from './quantity-form.service';
import { QuantityRoutingModule } from './quantity-routing.module';
import { QuantityComponent } from './quantity.component';
import { CanReadQuantityGuard, CanWriteQuantityGuard } from './quantity.guard';
import { QuantityService } from './quantity.service';
import { TableViewQuantityComponent } from './table-view-quantity';
import { UpdateQuantityComponent } from './update-quantity';

import { SkuService } from '../sku';

import { StoreService } from '../store';

import { RadioInputModule } from 'material/form/radio-input';
import { SwitchInputModule } from 'material/form/switch-input';
import { NumberInputModule } from 'material/form/number-input';

@NgModule({
  declarations: [
    QuantityComponent,
    TableViewQuantityComponent,
    DeleteQuantityComponent,
    CreateQuantityComponent,
    UpdateQuantityComponent,
  ],
  imports: [
    CommonModule,
    QuantityRoutingModule,
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
    QuantityService,
    ConfirmationService,
    MessageService,
    CanWriteQuantityGuard,
    CanReadQuantityGuard,
    QuantityFormService,

    SkuService,

    StoreService,

    {
      provide: NgrxDataService,
      useClass: QuantityService,
    },
  ],
  exports: [],
})
export class QuantityModule {}
