import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateDepartmentComponent } from './create-department';
import { DeleteDepartmentComponent } from './delete-department';
import { DepartmentComponent } from './department.component';
import {
  CanReadDepartmentGuard,
  CanWriteDepartmentGuard,
} from './department.guard';
import { TableViewDepartmentComponent } from './table-view-department';
import { UpdateDepartmentComponent } from './update-department';

export const routes: Routes = [
  {
    path: '',
    component: DepartmentComponent,

    children: [
      {
        title: 'View Department',
        path: 'table-view',
        component: TableViewDepartmentComponent,
        canActivate: [CanReadDepartmentGuard],
      },
      {
        title: 'Create Department',
        path: 'create',
        component: CreateDepartmentComponent,
        canActivate: [CanWriteDepartmentGuard],
      },
      {
        title: 'Update Department',
        path: 'update/:id',
        component: UpdateDepartmentComponent,
      },
      {
        title: 'Delete Department ',
        path: 'delete/:id',
        component: DeleteDepartmentComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartmentRoutingModule {}
