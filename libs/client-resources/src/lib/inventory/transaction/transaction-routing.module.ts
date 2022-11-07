import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateTransactionComponent } from './create-transaction';
import { DeleteTransactionComponent } from './delete-transaction';
import { TransactionComponent } from './transaction.component';
import {
  CanReadTransactionGuard,
  CanWriteTransactionGuard,
} from './transaction.guard';
import { TableViewTransactionComponent } from './table-view-transaction';
import { UpdateTransactionComponent } from './update-transaction';

export const routes: Routes = [
  {
    path: '',
    component: TransactionComponent,

    children: [
      {
        path: 'table-view',
        component: TableViewTransactionComponent,
        canActivate: [CanReadTransactionGuard],
      },
      {
        path: 'create',
        component: CreateTransactionComponent,
        canActivate: [CanWriteTransactionGuard],
      },
      {
        path: 'update/:id',
        component: UpdateTransactionComponent,
      },
      {
        path: 'delete/:id',
        component: DeleteTransactionComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionRoutingModule {}
