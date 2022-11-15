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
        ],
      },
    ]),
  ],
})
export class InventoryModule {}
