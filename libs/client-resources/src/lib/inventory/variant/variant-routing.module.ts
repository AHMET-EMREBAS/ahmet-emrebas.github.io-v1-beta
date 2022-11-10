import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateVariantComponent } from './create-variant';
import { DeleteVariantComponent } from './delete-variant';
import { VariantComponent } from './variant.component';
import { CanReadVariantGuard, CanWriteVariantGuard } from './variant.guard';
import { TableViewVariantComponent } from './table-view-variant';
import { UpdateVariantComponent } from './update-variant';

export const routes: Routes = [
  {
    path: '',
    component: VariantComponent,

    children: [
      {
        title: 'View Variant',
        path: 'table-view',
        component: TableViewVariantComponent,
        canActivate: [CanReadVariantGuard],
      },
      {
        title: 'Create Variant',
        path: 'create',
        component: CreateVariantComponent,
        canActivate: [CanWriteVariantGuard],
      },
      {
        title: 'Update Variant',
        path: 'update/:id',
        component: UpdateVariantComponent,
      },
      {
        title: 'Delete Variant ',
        path: 'delete/:id',
        component: DeleteVariantComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VariantRoutingModule {}
