import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateSkuComponent } from './create-sku';
import { DeleteSkuComponent } from './delete-sku';
import { SkuComponent } from './sku.component';
import { CanReadSkuGuard, CanWriteSkuGuard } from './sku.guard';
import { TableViewSkuComponent } from './table-view-sku';
import { UpdateSkuComponent } from './update-sku';

export const routes: Routes = [
  {
    path: '',
    component: SkuComponent,

    children: [
      {
        title: 'View Sku',
        path: 'table-view',
        component: TableViewSkuComponent,
        canActivate: [CanReadSkuGuard],
      },
      {
        title: 'Create Sku',
        path: 'create',
        component: CreateSkuComponent,
        canActivate: [CanWriteSkuGuard],
      },
      {
        title: 'Update Sku',
        path: 'update/:id',
        component: UpdateSkuComponent,
      },
      {
        title: 'Delete Sku ',
        path: 'delete/:id',
        component: DeleteSkuComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkuRoutingModule {}
