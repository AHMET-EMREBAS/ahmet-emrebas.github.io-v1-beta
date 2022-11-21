import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PermissionGuard } from '../../auth';
import { CreateStoreComponent } from './create-store/';
import { DeleteStoreComponent } from './delete-store/';
import { StoreComponent } from './store.component';
import { StoreService } from './store.service';
import { UpdateStoreComponent } from './update-store/';
import { ViewStoreComponent } from './view-store';

import { SharedResourceModule } from 'material/resource';

import { MatStepperModule } from '@angular/material/stepper';

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
    MatStepperModule,
    RouterModule.forChild([
      {
        path: '',
        component: StoreComponent,
        children: [
          {
            title: 'View Store',
            path: '',
            component: ViewStoreComponent,
            data: {
              permission: 'READ:STORE',
            },
            canActivate: [PermissionGuard],
          },
          {
            title: 'Create Store',
            path: 'create',
            component: CreateStoreComponent,
            data: {
              permission: 'WRITE:STORE',
            },
            canActivate: [PermissionGuard],
          },
          {
            title: 'Update Store',
            path: 'update',
            component: UpdateStoreComponent,
            data: {
              permission: 'WRITE:STORE',
            },
            canActivate: [PermissionGuard],
          },
          {
            title: 'Delete Store',
            path: 'delete',
            component: DeleteStoreComponent,
            data: {
              permission: 'WRITE:STORE',
            },
            canActivate: [PermissionGuard],
          },
        ],
      },
    ]),
  ],
  providers: [StoreService, PricelevelService],
})
export class StoreModule {}
