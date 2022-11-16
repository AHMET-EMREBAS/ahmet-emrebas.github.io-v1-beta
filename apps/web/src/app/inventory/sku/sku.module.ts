import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CreateSkuComponent } from './create-sku/';
import { DeleteSkuComponent } from './delete-sku/';
import { SkuComponent } from './sku.component';
import { SkuService } from './sku.service';
import { UpdateSkuComponent } from './update-sku/';
import { ViewSkuComponent } from './view-sku';

import { SharedResourceModule } from 'material/resource';

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
    RouterModule.forChild([
      {
        path: '',
        component: SkuComponent,
        children: [
          {
            title: 'View Sku',
            path: '',
            component: ViewSkuComponent,
          },
          {
            title: 'Create Sku',
            path: 'create',
            component: CreateSkuComponent,
          },
          {
            title: 'Update Sku',
            path: 'update',
            component: UpdateSkuComponent,
          },
          {
            title: 'Delete Sku',
            path: 'delete',
            component: DeleteSkuComponent,
          },
        ],
      },
    ]),
  ],
  providers: [SkuService, ProductService],
})
export class SkuModule {}
