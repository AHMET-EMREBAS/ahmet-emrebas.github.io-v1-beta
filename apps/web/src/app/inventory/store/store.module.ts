import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CreateStoreComponent } from './create-store/';
import { DeleteStoreComponent } from './delete-store/';
import { StoreComponent } from './store.component';
import { StoreService } from './store.service';
import { UpdateStoreComponent } from './update-store/';
import { ViewStoreComponent } from './view-store';

import { SharedResourceModule } from 'material/resource';

import { PricelevelService } from '../pricelevel';

@NgModule({
  declarations: [
    StoreComponent,
    CreateStoreComponent,
    UpdateStoreComponent,
    DeleteStoreComponent,
    ViewStoreComponent,
  ],
  imports: [
    CommonModule,
    SharedResourceModule,
    RouterModule.forChild([
      {
        path: '',
        component: StoreComponent,
        children: [
          {
            title: 'View Store',
            path: '',
            component: ViewStoreComponent,
          },
          {
            title: 'Create Store',
            path: 'create',
            component: CreateStoreComponent,
          },
          {
            title: 'Update Store',
            path: 'update',
            component: UpdateStoreComponent,
          },
          {
            title: 'Delete Store',
            path: 'delete',
            component: DeleteStoreComponent,
          },
        ],
      },
    ]),
  ],
  providers: [StoreService, PricelevelService],
})
export class StoreModule {}
