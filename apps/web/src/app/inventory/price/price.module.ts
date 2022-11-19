import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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
          },
          {
            title: 'Create Price',
            path: 'create',
            component: CreatePriceComponent,
          },
          {
            title: 'Update Price',
            path: 'update',
            component: UpdatePriceComponent,
          },
          {
            title: 'Delete Price',
            path: 'delete',
            component: DeletePriceComponent,
          },
        ],
      },
    ]),
  ],
  providers: [PriceService, SkuService, PricelevelService],
})
export class PriceModule {}
