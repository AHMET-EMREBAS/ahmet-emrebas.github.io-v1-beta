import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateOrderComponent } from './create-order';
import { DeleteOrderComponent } from './delete-order';
import { OrderComponent } from './order.component';
import { CanReadOrderGuard, CanWriteOrderGuard } from './order.guard';
import { TableViewOrderComponent } from './table-view-order';
import { UpdateOrderComponent } from './update-order';

export const routes: Routes = [
  {
    path: '',
    component: OrderComponent,

    children: [
      {
        path: 'table-view',
        component: TableViewOrderComponent,
        canActivate: [CanReadOrderGuard],
      },
      {
        path: 'create',
        component: CreateOrderComponent,
        canActivate: [CanWriteOrderGuard],
      },
      {
        path: 'update/:id',
        component: UpdateOrderComponent,
      },
      {
        path: 'delete/:id',
        component: DeleteOrderComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
