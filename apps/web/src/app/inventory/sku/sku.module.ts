import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PermissionGuard } from '../../auth';
import { CreateSkuComponent } from './create-sku/';
import { DeleteSkuComponent } from './delete-sku/';
import { SkuComponent } from './sku.component';
import { SkuService } from './sku.service';
import { UpdateSkuComponent } from './update-sku/';
import { ViewSkuComponent } from './view-sku';

import { SharedResourceModule } from 'material/resource';

import { MatStepperModule } from '@angular/material/stepper';

import { ProductService } from '../product';

@NgModule({
  declarations: [
    SkuComponent,
    CreateSkuComponent,
    UpdateSkuComponent,
    DeleteSkuComponent,
    ViewSkuComponent,
  ],
  imports: [
    CommonModule,
    SharedResourceModule,
    MatStepperModule,
    RouterModule.forChild([
      {
        path: '',
        component: SkuComponent,
        children: [
          {
            title: 'View Sku',
            path: '',
            component: ViewSkuComponent,
            data: {
              permission: 'READ:SKU',
            },
            canActivate: [PermissionGuard],
          },
          {
            title: 'Create Sku',
            path: 'create',
            component: CreateSkuComponent,
            data: {
              permission: 'WRITE:SKU',
            },
            canActivate: [PermissionGuard],
          },
          {
            title: 'Update Sku',
            path: 'update',
            component: UpdateSkuComponent,
            data: {
              permission: 'WRITE:SKU',
            },
            canActivate: [PermissionGuard],
          },
          {
            title: 'Delete Sku',
            path: 'delete',
            component: DeleteSkuComponent,
            data: {
              permission: 'WRITE:SKU',
            },
            canActivate: [PermissionGuard],
          },
        ],
      },
    ]),
  ],
  providers: [SkuService, ProductService],
})
export class SkuModule {}
