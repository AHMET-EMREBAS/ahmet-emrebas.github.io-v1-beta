import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreatePricelevelComponent } from './create-pricelevel';
import { DeletePricelevelComponent } from './delete-pricelevel';
import { PricelevelComponent } from './pricelevel.component';
import {
  CanReadPricelevelGuard,
  CanWritePricelevelGuard,
} from './pricelevel.guard';
import { TableViewPricelevelComponent } from './table-view-pricelevel';
import { UpdatePricelevelComponent } from './update-pricelevel';

export const routes: Routes = [
  {
    path: '',
    component: PricelevelComponent,

    children: [
      {
        title: 'View Pricelevel',
        path: 'table-view',
        component: TableViewPricelevelComponent,
        canActivate: [CanReadPricelevelGuard],
      },
      {
        title: 'Create Pricelevel',
        path: 'create',
        component: CreatePricelevelComponent,
        canActivate: [CanWritePricelevelGuard],
      },
      {
        title: 'Update Pricelevel',
        path: 'update/:id',
        component: UpdatePricelevelComponent,
      },
      {
        title: 'Delete Pricelevel ',
        path: 'delete/:id',
        component: DeletePricelevelComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PricelevelRoutingModule {}
