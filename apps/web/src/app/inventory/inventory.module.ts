import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutModule } from 'layout';

import { InventoryComponent } from './inventory.component';

@NgModule({
  declarations: [InventoryComponent],
  imports: [
    CommonModule,

    LayoutModule,
    RouterModule.forChild([
      {
        path: '',
        component: InventoryComponent,
        children: [
          {
            title: 'Product Module',
            path: 'product',
            loadChildren: () =>
              import('client/inventory/product').then((m) => m.ProductModule),
          },
          {
            title: 'Sku Module',
            path: 'sku',
            loadChildren: () =>
              import('client/inventory/sku').then((m) => m.SkuModule),
          },
          {
            title: 'Category Module',
            path: 'category',
            loadChildren: () =>
              import('client/inventory/category').then((m) => m.CategoryModule),
          },
          {
            title: 'Department Module',
            path: 'department',
            loadChildren: () =>
              import('client/inventory/department').then(
                (m) => m.DepartmentModule
              ),
          },
          {
            title: 'Quantity Module',
            path: 'quantity',
            loadChildren: () =>
              import('client/inventory/quantity').then((m) => m.QuantityModule),
          },
          {
            title: 'Pricelevel Module',
            path: 'pricelevel',
            loadChildren: () =>
              import('client/inventory/pricelevel').then(
                (m) => m.PricelevelModule
              ),
          },
          {
            title: 'Store Module',
            path: 'store',
            loadChildren: () =>
              import('client/inventory/store').then((m) => m.StoreModule),
          },
          {
            title: 'Price Module',
            path: 'price',
            loadChildren: () =>
              import('client/inventory/price').then((m) => m.PriceModule),
          },
        ],
      },
    ]),
  ],
})
export class InventoryModule {}
