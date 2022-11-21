import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PermissionGuard } from '../../auth';
import { CreateDepartmentComponent } from './create-department/';
import { DeleteDepartmentComponent } from './delete-department/';
import { DepartmentComponent } from './department.component';
import { DepartmentService } from './department.service';
import { UpdateDepartmentComponent } from './update-department/';
import { ViewDepartmentComponent } from './view-department';

import { SharedResourceModule } from 'material/resource';

import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
  declarations: [
    DepartmentComponent,
    CreateDepartmentComponent,
    UpdateDepartmentComponent,
    DeleteDepartmentComponent,
    ViewDepartmentComponent,
  ],
  imports: [
    CommonModule,
    SharedResourceModule,
    MatStepperModule,
    RouterModule.forChild([
      {
        path: '',
        component: DepartmentComponent,
        children: [
          {
            title: 'View Department',
            path: '',
            component: ViewDepartmentComponent,
            data: {
              permission: 'READ:DEPARTMENT',
            },
            canActivate: [PermissionGuard],
          },
          {
            title: 'Create Department',
            path: 'create',
            component: CreateDepartmentComponent,
            data: {
              permission: 'WRITE:DEPARTMENT',
            },
            canActivate: [PermissionGuard],
          },
          {
            title: 'Update Department',
            path: 'update',
            component: UpdateDepartmentComponent,
            data: {
              permission: 'WRITE:DEPARTMENT',
            },
            canActivate: [PermissionGuard],
          },
          {
            title: 'Delete Department',
            path: 'delete',
            component: DeleteDepartmentComponent,
            data: {
              permission: 'WRITE:DEPARTMENT',
            },
            canActivate: [PermissionGuard],
          },
        ],
      },
    ]),
  ],
  providers: [DepartmentService],
})
export class DepartmentModule {}
