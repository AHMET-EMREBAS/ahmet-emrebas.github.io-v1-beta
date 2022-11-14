import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TableModule } from 'material/table';

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
  providers: [ProductService],
})
export class ProductModule {}
