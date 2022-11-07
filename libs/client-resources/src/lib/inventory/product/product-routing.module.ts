import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateProductComponent } from './create-product';
import { DeleteProductComponent } from './delete-product';
import { ProductComponent } from './product.component';
import { CanReadProductGuard, CanWriteProductGuard } from './product.guard';
import { TableViewProductComponent } from './table-view-product';
import { UpdateProductComponent } from './update-product';

export const routes: Routes = [
  {
    path: '',
    component: ProductComponent,

    children: [
      {
        path: 'table-view',
        component: TableViewProductComponent,
        canActivate: [CanReadProductGuard],
      },
      {
        path: 'create',
        component: CreateProductComponent,
        canActivate: [CanWriteProductGuard],
      },
      {
        path: 'update/:id',
        component: UpdateProductComponent,
      },
      {
        path: 'delete/:id',
        component: DeleteProductComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
