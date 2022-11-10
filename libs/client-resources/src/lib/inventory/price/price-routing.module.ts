import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreatePriceComponent } from './create-price';
import { DeletePriceComponent } from './delete-price';
import { PriceComponent } from './price.component';
import { CanReadPriceGuard, CanWritePriceGuard } from './price.guard';
import { TableViewPriceComponent } from './table-view-price';
import { UpdatePriceComponent } from './update-price';

export const routes: Routes = [
  {
    path: '',
    component: PriceComponent,

    children: [
      {
        title: 'View Price',
        path: 'table-view',
        component: TableViewPriceComponent,
        canActivate: [CanReadPriceGuard],
      },
      {
        title: 'Create Price',
        path: 'create',
        component: CreatePriceComponent,
        canActivate: [CanWritePriceGuard],
      },
      {
        title: 'Update Price',
        path: 'update/:id',
        component: UpdatePriceComponent,
      },
      {
        title: 'Delete Price ',
        path: 'delete/:id',
        component: DeletePriceComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PriceRoutingModule {}
