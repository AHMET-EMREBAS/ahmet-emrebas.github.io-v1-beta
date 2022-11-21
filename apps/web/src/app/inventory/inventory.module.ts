import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutModule } from 'layout';
import { ToastModule } from 'primeng/toast';

import { InventoryComponent } from './inventory.component';

@NgModule({
  declarations: [InventoryComponent],
  imports: [
    CommonModule,
    LayoutModule,
    ToastModule,
    RouterModule.forChild([
      {
        path: '',
        component: InventoryComponent,
        children: [
          {
            title: 'Product Module',
            path: 'product',
            data: {
              permission: 'READ:PRODUCT',
            },
            loadChildren: () =>
              import('./product').then((m) => m.ProductModule),
          },
          {
            title: 'Sku Module',
            path: 'sku',
            data: {
              permission: 'READ:SKU',
            },
            loadChildren: () => import('./sku').then((m) => m.SkuModule),
          },
          {
            title: 'Category Module',
            path: 'category',
            data: {
              permission: 'READ:CATEGORY',
            },
            loadChildren: () =>
              import('./category').then((m) => m.CategoryModule),
          },
          {
            title: 'Department Module',
            path: 'department',
            loadChildren: () =>
              import('./department').then((m) => m.DepartmentModule),
          },
          {
            title: 'Quantity Module',
            path: 'quantity',
            loadChildren: () =>
              import('./quantity').then((m) => m.QuantityModule),
          },
          {
            title: 'Pricelevel Module',
            path: 'pricelevel',
            loadChildren: () =>
              import('./pricelevel').then((m) => m.PricelevelModule),
          },
          {
            title: 'Store Module',
            path: 'store',
            loadChildren: () => import('./store').then((m) => m.StoreModule),
          },
          {
            title: 'Price Module',
            path: 'price',
            loadChildren: () => import('./price').then((m) => m.PriceModule),
          },
          {
            title: 'User Module',
            path: 'user',
            loadChildren: () => import('./user').then((m) => m.UserModule),
          },
          {
            title: 'Permission Module',
            path: 'permission',
            loadChildren: () =>
              import('./permission').then((m) => m.PermissionModule),
          },
          {
            title: 'Message Module',
            path: 'message',
            loadChildren: () =>
              import('./message').then((m) => m.MessageModule),
          },
        ],
      },
    ]),
  ],
})
export class InventoryModule {}
