import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PermissionGuard } from '../../auth';
import { CreatePriceComponent } from './create-price/';
import { DeletePriceComponent } from './delete-price/';
import { PriceComponent } from './price.component';
import { PriceService } from './price.service';
import { UpdatePriceComponent } from './update-price/';
import { ViewPriceComponent } from './view-price';

import { SharedResourceModule } from 'material/resource';

import { MatStepperModule } from '@angular/material/stepper';

import { SkuService } from '../sku';

import { PricelevelService } from '../pricelevel';

@NgModule({
  declarations: [
    PriceComponent,
    CreatePriceComponent,
    UpdatePriceComponent,
    DeletePriceComponent,
    ViewPriceComponent,
  ],
  imports: [
    CommonModule,
    SharedResourceModule,
    MatStepperModule,
    RouterModule.forChild([
      {
        path: '',
        component: PriceComponent,
        children: [
          {
            title: 'View Price',
            path: '',
            component: ViewPriceComponent,
            data: {
              permission: 'READ:PRICE',
            },
            canActivate: [PermissionGuard],
          },
          {
            title: 'Create Price',
            path: 'create',
            component: CreatePriceComponent,
            data: {
              permission: 'WRITE:PRICE',
            },
            canActivate: [PermissionGuard],
          },
          {
            title: 'Update Price',
            path: 'update',
            component: UpdatePriceComponent,
            data: {
              permission: 'WRITE:PRICE',
            },
            canActivate: [PermissionGuard],
          },
          {
            title: 'Delete Price',
            path: 'delete',
            component: DeletePriceComponent,
            data: {
              permission: 'WRITE:PRICE',
            },
            canActivate: [PermissionGuard],
          },
        ],
      },
    ]),
  ],
  providers: [PriceService, SkuService, PricelevelService],
})
export class PriceModule {}
