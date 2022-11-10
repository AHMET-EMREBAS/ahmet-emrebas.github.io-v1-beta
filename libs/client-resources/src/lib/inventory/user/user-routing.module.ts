import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateUserComponent } from './create-user';
import { DeleteUserComponent } from './delete-user';
import { UserComponent } from './user.component';
import { CanReadUserGuard, CanWriteUserGuard } from './user.guard';
import { TableViewUserComponent } from './table-view-user';
import { UpdateUserComponent } from './update-user';

export const routes: Routes = [
  {
    path: '',
    component: UserComponent,

    children: [
      {
        title: 'View User',
        path: 'table-view',
        component: TableViewUserComponent,
        canActivate: [CanReadUserGuard],
      },
      {
        title: 'Create User',
        path: 'create',
        component: CreateUserComponent,
        canActivate: [CanWriteUserGuard],
      },
      {
        title: 'Update User',
        path: 'update/:id',
        component: UpdateUserComponent,
      },
      {
        title: 'Delete User ',
        path: 'delete/:id',
        component: DeleteUserComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
