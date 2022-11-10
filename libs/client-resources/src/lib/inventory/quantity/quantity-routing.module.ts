import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateQuantityComponent } from './create-quantity';
import { DeleteQuantityComponent } from './delete-quantity';
import { QuantityComponent } from './quantity.component';
import { CanReadQuantityGuard, CanWriteQuantityGuard } from './quantity.guard';
import { TableViewQuantityComponent } from './table-view-quantity';
import { UpdateQuantityComponent } from './update-quantity';

export const routes: Routes = [
  {
    path: '',
    component: QuantityComponent,

    children: [
      {
        title: 'View Quantity',
        path: 'table-view',
        component: TableViewQuantityComponent,
        canActivate: [CanReadQuantityGuard],
      },
      {
        title: 'Create Quantity',
        path: 'create',
        component: CreateQuantityComponent,
        canActivate: [CanWriteQuantityGuard],
      },
      {
        title: 'Update Quantity',
        path: 'update/:id',
        component: UpdateQuantityComponent,
      },
      {
        title: 'Delete Quantity ',
        path: 'delete/:id',
        component: DeleteQuantityComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuantityRoutingModule {}
