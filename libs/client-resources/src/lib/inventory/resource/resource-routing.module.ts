import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateResourceComponent } from './create-resource';
import { DeleteResourceComponent } from './delete-resource';
import { ResourceComponent } from './resource.component';
import { CanReadResourceGuard, CanWriteResourceGuard } from './resource.guard';
import { TableViewResourceComponent } from './table-view-resource';
import { UpdateResourceComponent } from './update-resource';

export const routes: Routes = [
  {
    path: '',
    component: ResourceComponent,

    children: [
      {
        title: 'View Resource',
        path: 'table-view',
        component: TableViewResourceComponent,
        canActivate: [CanReadResourceGuard],
      },
      {
        title: 'Create Resource',
        path: 'create',
        component: CreateResourceComponent,
        canActivate: [CanWriteResourceGuard],
      },
      {
        title: 'Update Resource',
        path: 'update/:id',
        component: UpdateResourceComponent,
      },
      {
        title: 'Delete Resource ',
        path: 'delete/:id',
        component: DeleteResourceComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResourceRoutingModule {}
