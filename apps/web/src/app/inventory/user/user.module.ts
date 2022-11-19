import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CreateUserComponent } from './create-user/';
import { DeleteUserComponent } from './delete-user/';
import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { UpdateUserComponent } from './update-user/';
import { ViewUserComponent } from './view-user';

import { SharedResourceModule } from 'material/resource';

import { MatStepperModule } from '@angular/material/stepper';

import { PermissionService } from '../permission';

@NgModule({
  declarations: [
    UserComponent,
    CreateUserComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    ViewUserComponent,
  ],
  imports: [
    CommonModule,
    SharedResourceModule,
    MatStepperModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserComponent,
        children: [
          {
            title: 'View User',
            path: '',
            component: ViewUserComponent,
          },
          {
            title: 'Create User',
            path: 'create',
            component: CreateUserComponent,
          },
          {
            title: 'Update User',
            path: 'update',
            component: UpdateUserComponent,
          },
          {
            title: 'Delete User',
            path: 'delete',
            component: DeleteUserComponent,
          },
        ],
      },
    ]),
  ],
  providers: [UserService, PermissionService],
})
export class UserModule {}
