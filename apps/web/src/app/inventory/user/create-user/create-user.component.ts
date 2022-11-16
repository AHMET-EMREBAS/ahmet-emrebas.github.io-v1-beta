import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

import { InputOptions } from 'material/form';

import { PermissionService } from '../../permission';
import { UserService } from '../user.service';

@Component({
  selector: 'ae-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent {
  submitted = false;
  title = 'Create User';
  formGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),

    password: new FormControl('', [Validators.required]),

    permission: new FormControl('', [Validators.required]),
  });

  fields: InputOptions[] = [
    {
      name: 'username',
      type: 'email',
      placeholder: 'username',

      required: true,

      email: true,
    },

    {
      name: 'password',
      type: 'password',
      placeholder: 'password',

      required: true,

      password: true,
    },

    {
      name: 'permission',
      type: 'select',
      placeholder: 'permission',
      asyncOptions: this.permissionService.entities$,
      optionValue: 'id',
      optionLabel: 'name',

      required: true,
    },
  ];

  constructor(
    private readonly userService: UserService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly permissionService: PermissionService
  ) {
    this.userService.getAll();
    this.permissionService.getAll();
  }

  submit() {
    if (this.submitted === false) {
      if (this.formGroup.valid) {
        this.submitted = true;
        this.userService.add({
          username: this.value('username'),

          password: this.value('password'),

          permission: this.value('permission')?.id,
        });
      }
    }
  }

  private value(key: string) {
    return this.formGroup.get(key)?.value;
  }
}
