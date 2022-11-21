import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PermissionGuard } from '../../auth';
import { CreatePricelevelComponent } from './create-pricelevel/';
import { DeletePricelevelComponent } from './delete-pricelevel/';
import { PricelevelComponent } from './pricelevel.component';
import { PricelevelService } from './pricelevel.service';
import { UpdatePricelevelComponent } from './update-pricelevel/';
import { ViewPricelevelComponent } from './view-pricelevel';

import { SharedResourceModule } from 'material/resource';

import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
  declarations: [
    PricelevelComponent,
    CreatePricelevelComponent,
    UpdatePricelevelComponent,
    DeletePricelevelComponent,
    ViewPricelevelComponent,
  ],
  imports: [
    CommonModule,
    SharedResourceModule,
    MatStepperModule,
    RouterModule.forChild([
      {
        path: '',
        component: PricelevelComponent,
        children: [
          {
            title: 'View Pricelevel',
            path: '',
            component: ViewPricelevelComponent,
            data: {
              permission: 'READ:PRICELEVEL',
            },
            canActivate: [PermissionGuard],
          },
          {
            title: 'Create Pricelevel',
            path: 'create',
            component: CreatePricelevelComponent,
            data: {
              permission: 'WRITE:PRICELEVEL',
            },
            canActivate: [PermissionGuard],
          },
          {
            title: 'Update Pricelevel',
            path: 'update',
            component: UpdatePricelevelComponent,
            data: {
              permission: 'WRITE:PRICELEVEL',
            },
            canActivate: [PermissionGuard],
          },
          {
            title: 'Delete Pricelevel',
            path: 'delete',
            component: DeletePricelevelComponent,
            data: {
              permission: 'WRITE:PRICELEVEL',
            },
            canActivate: [PermissionGuard],
          },
        ],
      },
    ]),
  ],
  providers: [PricelevelService],
})
export class PricelevelModule {}
