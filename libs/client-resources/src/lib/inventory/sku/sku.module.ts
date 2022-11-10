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

import { CreateSkuComponent } from './create-sku';
import { DeleteSkuComponent } from './delete-sku';
import { SkuFormService } from './sku-form.service';
import { SkuRoutingModule } from './sku-routing.module';
import { SkuComponent } from './sku.component';
import { CanReadSkuGuard, CanWriteSkuGuard } from './sku.guard';
import { SkuService } from './sku.service';
import { TableViewSkuComponent } from './table-view-sku';
import { UpdateSkuComponent } from './update-sku';

import { VariantService } from '../variant';

import { ProductService } from '../product';

import { RadioInputModule } from 'material/form/radio-input';
import { SwitchInputModule } from 'material/form/switch-input';
import { NumberInputModule } from 'material/form/number-input';

@NgModule({
  declarations: [
    SkuComponent,
    TableViewSkuComponent,
    DeleteSkuComponent,
    CreateSkuComponent,
    UpdateSkuComponent,
  ],
  imports: [
    CommonModule,
    SkuRoutingModule,
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
    SkuService,
    ConfirmationService,
    MessageService,
    CanWriteSkuGuard,
    CanReadSkuGuard,
    SkuFormService,

    VariantService,

    ProductService,

    {
      provide: NgrxDataService,
      useClass: SkuService,
    },
  ],
  exports: [],
})
export class SkuModule {}
