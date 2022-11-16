import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CreateDepartmentComponent } from './create-department/';
import { DeleteDepartmentComponent } from './delete-department/';
import { DepartmentComponent } from './department.component';
import { DepartmentService } from './department.service';
import { UpdateDepartmentComponent } from './update-department/';
import { ViewDepartmentComponent } from './view-department';

import { SharedResourceModule } from 'material/resource';

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
    RouterModule.forChild([
      {
        path: '',
        component: DepartmentComponent,
        children: [
          {
            title: 'View Department',
            path: '',
            component: ViewDepartmentComponent,
          },
          {
            title: 'Create Department',
            path: 'create',
            component: CreateDepartmentComponent,
          },
          {
            title: 'Update Department',
            path: 'update',
            component: UpdateDepartmentComponent,
          },
          {
            title: 'Delete Department',
            path: 'delete',
            component: DeleteDepartmentComponent,
          },
        ],
      },
    ]),
  ],
  providers: [DepartmentService],
})
export class DepartmentModule {}
