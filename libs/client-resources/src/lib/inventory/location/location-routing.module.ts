import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateLocationComponent } from './create-location';
import { DeleteLocationComponent } from './delete-location';
import { LocationComponent } from './location.component';
import { CanReadLocationGuard, CanWriteLocationGuard } from './location.guard';
import { TableViewLocationComponent } from './table-view-location';
import { UpdateLocationComponent } from './update-location';

export const routes: Routes = [
  {
    path: '',
    component: LocationComponent,

    children: [
      {
        title: 'View Location',
        path: 'table-view',
        component: TableViewLocationComponent,
        canActivate: [CanReadLocationGuard],
      },
      {
        title: 'Create Location',
        path: 'create',
        component: CreateLocationComponent,
        canActivate: [CanWriteLocationGuard],
      },
      {
        title: 'Update Location',
        path: 'update/:id',
        component: UpdateLocationComponent,
      },
      {
        title: 'Delete Location ',
        path: 'delete/:id',
        component: DeleteLocationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationRoutingModule {}
