import { Injectable } from '@angular/core';

import { FormManager } from 'material/form/form-builder';
import { of } from 'rxjs';

import { User } from './user.interface';
import { UserService } from './user.service';

@Injectable()
export class UserFormService {
  private readonly formManager!: FormManager<User>;

  constructor(private readonly userService: UserService) {
    this.formManager = new FormManager(userService);
    this.init();
  }

  private init() {
    this.formManager

      .add({
        id: 'user-username-input',
        name: 'username',
        inputType: 'email',

        isEmail: true,
      })

      .add({
        id: 'user-password-input',
        name: 'password',
        inputType: 'password',

        isPassword: true,
        minLength: 6,
        maxLength: 50,
      })

      .add({
        id: 'user-permissions-input',
        name: 'permissions',
        inputType: 'checkbox-group',
        isNumberArray: true,
        asyncOptions: this.userService.permissionsService?.entities$,
      });
  }

  createForm() {
    return this.formManager.newCreateForm();
  }

  updateForm() {
    return this.formManager.newUpdateForm();
  }

  createFormFields() {
    return this.formManager.getFields();
  }
  updateFormFields() {
    return this.formManager.getUpdateFields();
  }
}
