import { Component, OnInit } from '@angular/core';
import { MessageService as SystemMessageService } from 'primeng/api';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { groupBy } from 'lodash';
import { InputOptions } from 'material/form';

import { UserService } from '../user.service';

import { PermissionService } from '../../permission';

@Component({
  selector: 'ae-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  submitted = false;
  title = 'Create User';
  formGroup = new FormGroup({
    username: new FormControl(undefined, [
      Validators.required,

      Validators.email,
    ]),

    password: new FormControl(undefined, [
      Validators.required,

      Validators.pattern(/[A-Z]{1,}/),
      Validators.pattern(/[a-z]{1,}/),
      Validators.pattern(/[0-9]{1,}/),
      Validators.pattern(/[~!@#$%^&*()_+=-]{1,}/),
      Validators.minLength(6),
    ]),

    permission: new FormControl(undefined, []),
  });

  fields: InputOptions[] = [
    {
      name: 'username',
      type: 'email',
      group: 'Username',
      placeholder: 'username',

      required: true,

      email: true,
    },

    {
      name: 'password',
      type: 'password',
      group: 'Password',
      placeholder: 'password',

      required: true,

      password: true,
    },

    {
      name: 'permission',
      type: 'select-many',
      group: 'Permissions',
      placeholder: 'permission',
      asyncOptions: this.permissionService.entities$,
      optionValue: 'id',
      optionLabel: 'description',
    },
  ];

  groups = Object.entries(groupBy(this.fields, 'group'));

  constructor(
    private readonly userService: UserService,
    private readonly systemMessageService: SystemMessageService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly permissionService: PermissionService
  ) {}

  ngOnInit(): void {
    this.permissionService.getAsOptions(['id', 'description']);
  }

  submit() {
    if (this.submitted === false) {
      if (this.formGroup.valid) {
        this.submitted = true;
        this.userService.add({
          username: this.value('username'),

          password: this.value('password'),

          permission: this.value('permission'),
        });
      } else {
        const e = Object.entries(this.formGroup.controls).filter(
          (e) => e[1].errors
        )[0];

        this.systemMessageService.add({
          severity: 'error',
          summary: `${e[0]} field is not valid!`,
        });
      }
    }
  }

  private value(key: string) {
    return this.formGroup.get(key)?.value;
  }
}
