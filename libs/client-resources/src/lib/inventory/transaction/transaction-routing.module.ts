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
        title: 'View Transaction',
        path: 'table-view',
        component: TableViewTransactionComponent,
        canActivate: [CanReadTransactionGuard],
      },
      {
        title: 'Create Transaction',
        path: 'create',
        component: CreateTransactionComponent,
        canActivate: [CanWriteTransactionGuard],
      },
      {
        title: 'Update Transaction',
        path: 'update/:id',
        component: UpdateTransactionComponent,
      },
      {
        title: 'Delete Transaction ',
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
