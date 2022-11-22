import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PermissionGuard } from '../../auth';
import { CreateQuantityComponent } from './create-quantity/';
import { DeleteQuantityComponent } from './delete-quantity/';
import { QuantityComponent } from './quantity.component';
import { QuantityService } from './quantity.service';
import { UpdateQuantityComponent } from './update-quantity/';
import { ViewQuantityComponent } from './view-quantity';

import { SharedResourceModule } from 'material/resource';

import { MatStepperModule } from '@angular/material/stepper';

import { SkuService } from '../sku';

import { StoreService } from '../store';

@NgModule({
  declarations: [
    QuantityComponent,
    CreateQuantityComponent,
    UpdateQuantityComponent,
    DeleteQuantityComponent,
    ViewQuantityComponent,
  ],
  imports: [
    CommonModule,
    SharedResourceModule,
    MatStepperModule,
    RouterModule.forChild([
      {
        path: '',
        component: QuantityComponent,
        children: [
          {
            title: 'View Quantity',
            path: '',
            component: ViewQuantityComponent,
            data: {
              permission: 'READ:QUANTITY',
            },
            canActivate: [PermissionGuard],
          },
          {
            title: 'Create Quantity',
            path: 'create',
            component: CreateQuantityComponent,
            data: {
              permission: 'WRITE:QUANTITY',
            },
            canActivate: [PermissionGuard],
          },
          {
            title: 'Update Quantity',
            path: 'update',
            component: UpdateQuantityComponent,
            data: {
              permission: 'WRITE:QUANTITY',
            },
            canActivate: [PermissionGuard],
          },
          {
            title: 'Delete Quantity',
            path: 'delete',
            component: DeleteQuantityComponent,
            data: {
              permission: 'WRITE:QUANTITY',
            },
            canActivate: [PermissionGuard],
          },
        ],
      },
    ]),
  ],
  providers: [QuantityService, SkuService, StoreService],
})
export class QuantityModule {}
