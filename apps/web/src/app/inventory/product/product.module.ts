import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedResourceModule } from 'material/resource';
import {
  ConfirmationService,
  MessageService,
} from 'primeng/api';

import { CategoryService } from '../category';
import { DepartmentService } from '../department';
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
    SharedResourceModule,
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
            path: 'create',
            component: CreateProductComponent,
          },
          {
            title: 'Update Product',
            path: 'update',
            component: UpdateProductComponent,
          },
          {
            title: 'Delete Product',
            path: 'delete',
            component: DeleteProductComponent,
          },
        ],
      },
    ]),
  ],
  providers: [
    ProductService,
    CategoryService,
    DepartmentService,
    ConfirmationService,
    MessageService,
  ],
})
export class ProductModule {}
