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
        path: 'table-view',
        component: TableViewStoreComponent,
        canActivate: [CanReadStoreGuard],
      },
      {
        path: 'create',
        component: CreateStoreComponent,
        canActivate: [CanWriteStoreGuard],
      },
      {
        path: 'update/:id',
        component: UpdateStoreComponent,
      },
      {
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
