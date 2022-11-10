import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateStoreComponent } from './create-store';
import { DeleteStoreComponent } from './delete-store';
import { StoreComponent } from './store.component';
import { CanReadStoreGuard, CanWriteStoreGuard } from './store.guard';
import { TableViewStoreComponent } from './table-view-store';
import { UpdateStoreComponent } from './update-store';

export const routes: Routes = [
  {
    path: '',
    component: StoreComponent,

    children: [
      {
        title: 'View Store',
        path: 'table-view',
        component: TableViewStoreComponent,
        canActivate: [CanReadStoreGuard],
      },
      {
        title: 'Create Store',
        path: 'create',
        component: CreateStoreComponent,
        canActivate: [CanWriteStoreGuard],
      },
      {
        title: 'Update Store',
        path: 'update/:id',
        component: UpdateStoreComponent,
      },
      {
        title: 'Delete Store ',
        path: 'delete/:id',
        component: DeleteStoreComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule {}
