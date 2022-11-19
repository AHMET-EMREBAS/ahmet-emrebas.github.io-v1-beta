import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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
          },
          {
            title: 'Create Quantity',
            path: 'create',
            component: CreateQuantityComponent,
          },
          {
            title: 'Update Quantity',
            path: 'update',
            component: UpdateQuantityComponent,
          },
          {
            title: 'Delete Quantity',
            path: 'delete',
            component: DeleteQuantityComponent,
          },
        ],
      },
    ]),
  ],
  providers: [QuantityService, SkuService, StoreService],
})
export class QuantityModule {}
