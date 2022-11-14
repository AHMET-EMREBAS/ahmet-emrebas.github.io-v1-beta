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
            path: 'Product',
            loadChildren: () =>
              import('client/product').then((m) => m.ProductModule),
          },
        ],
      },
    ]),
  ],
})
export class InventoryModule {}
