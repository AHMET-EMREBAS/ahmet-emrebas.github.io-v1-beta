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

import { CreateSkuComponent } from './create-sku';
import { DeleteSkuComponent } from './delete-sku';
import { SkuFormService } from './sku-form.service';
import { SkuRoutingModule } from './sku-routing.module';
import { SkuComponent } from './sku.component';
import { CanReadSkuGuard, CanWriteSkuGuard } from './sku.guard';
import { SkuService } from './sku.service';
import { TableViewSkuComponent } from './table-view-sku';
import { UpdateSkuComponent } from './update-sku';
import { FormModule } from 'material/form';

import { VariantService } from '../variant';

import { ProductService } from '../product';

import { TextInputModule } from 'material/form/text-input';

import { TextareaInputModule } from 'material/form/textarea-input';

import { SearchManyInputModule } from 'material/form/search-many-input';

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

    TextareaInputModule,

    SearchManyInputModule,
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
