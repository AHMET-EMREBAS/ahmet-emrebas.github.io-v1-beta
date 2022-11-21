import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PermissionGuard } from '../../auth';
import { CreateProductComponent } from './create-product/';
import { DeleteProductComponent } from './delete-product/';
import { ProductComponent } from './product.component';
import { ProductService } from './product.service';
import { UpdateProductComponent } from './update-product/';
import { ViewProductComponent } from './view-product';

import { SharedResourceModule } from 'material/resource';

import { MatStepperModule } from '@angular/material/stepper';

import { CategoryService } from '../category';

import { DepartmentService } from '../department';

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
    MatStepperModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductComponent,
        children: [
          {
            title: 'View Product',
            path: '',
            component: ViewProductComponent,
            data: {
              permission: 'READ:PRODUCT',
            },
            canActivate: [PermissionGuard],
          },
          {
            title: 'Create Product',
            path: 'create',
            component: CreateProductComponent,
            data: {
              permission: 'WRITE:PRODUCT',
            },
            canActivate: [PermissionGuard],
          },
          {
            title: 'Update Product',
            path: 'update',
            component: UpdateProductComponent,
            data: {
              permission: 'WRITE:PRODUCT',
            },
            canActivate: [PermissionGuard],
          },
          {
            title: 'Delete Product',
            path: 'delete',
            component: DeleteProductComponent,
            data: {
              permission: 'WRITE:PRODUCT',
            },
            canActivate: [PermissionGuard],
          },
        ],
      },
    ]),
  ],
  providers: [ProductService, CategoryService, DepartmentService],
})
export class ProductModule {}
