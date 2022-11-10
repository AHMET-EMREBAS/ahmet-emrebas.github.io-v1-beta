import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateFeatureComponent } from './create-feature';
import { DeleteFeatureComponent } from './delete-feature';
import { FeatureComponent } from './feature.component';
import { CanReadFeatureGuard, CanWriteFeatureGuard } from './feature.guard';
import { TableViewFeatureComponent } from './table-view-feature';
import { UpdateFeatureComponent } from './update-feature';

export const routes: Routes = [
  {
    path: '',
    component: FeatureComponent,

    children: [
      {
        title: 'View Feature',
        path: 'table-view',
        component: TableViewFeatureComponent,
        canActivate: [CanReadFeatureGuard],
      },
      {
        title: 'Create Feature',
        path: 'create',
        component: CreateFeatureComponent,
        canActivate: [CanWriteFeatureGuard],
      },
      {
        title: 'Update Feature',
        path: 'update/:id',
        component: UpdateFeatureComponent,
      },
      {
        title: 'Delete Feature ',
        path: 'delete/:id',
        component: DeleteFeatureComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
