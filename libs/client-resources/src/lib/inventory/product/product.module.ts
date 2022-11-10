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

import { CreateProductComponent } from './create-product';
import { DeleteProductComponent } from './delete-product';
import { ProductFormService } from './product-form.service';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { CanReadProductGuard, CanWriteProductGuard } from './product.guard';
import { ProductService } from './product.service';
import { TableViewProductComponent } from './table-view-product';
import { UpdateProductComponent } from './update-product';
import { FormModule } from 'material/form';

import { CategoryService } from '../category';

import { DepartmentService } from '../department';

import { VariantService } from '../variant';

import { TextInputModule } from 'material/form/text-input';

import { TextareaInputModule } from 'material/form/textarea-input';

import { SearchOneInputModule } from 'material/form/search-one-input';

import { SearchManyInputModule } from 'material/form/search-many-input';

@NgModule({
  declarations: [
    ProductComponent,
    TableViewProductComponent,
    DeleteProductComponent,
    CreateProductComponent,
    UpdateProductComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
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

    SearchOneInputModule,

    SearchManyInputModule,
  ],

  providers: [
    ProductService,
    ConfirmationService,
    MessageService,
    CanWriteProductGuard,
    CanReadProductGuard,
    ProductFormService,

    CategoryService,

    DepartmentService,

    VariantService,

    {
      provide: NgrxDataService,
      useClass: ProductService,
    },
  ],
  exports: [],
})
export class ProductModule {}
