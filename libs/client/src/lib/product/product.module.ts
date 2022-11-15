import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormModule } from 'material/form';
import { TableModule } from 'material/table';
import {
  ConfirmationService,
  MessageService,
} from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';

import { CreateProductComponent } from './create-product/';
import { DeleteProductComponent } from './delete-product/';
import { ProductComponent } from './product.component';
import { ProductService } from './product.service';
import { UpdateProductComponent } from './update-product/';
import { ViewProductComponent } from './view-product';

@NgModule({
  declarations: [
    ProductComponent,
    CreateProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    ViewProductComponent,
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
        component: ProductComponent,
        children: [
          {
            title: 'View Product',
            path: '',
            component: ViewProductComponent,
          },
          {
            title: 'Create Product',
            path: 'Create',
            component: CreateProductComponent,
          },
          {
            title: 'Update Product',
            path: 'Update',
            component: UpdateProductComponent,
          },
          {
            title: 'Delete Product',
            path: 'Delete',
            component: DeleteProductComponent,
          },
        ],
      },
    ]),
  ],
  providers: [ProductService, ConfirmationService, MessageService],
})
export class ProductModule {}
