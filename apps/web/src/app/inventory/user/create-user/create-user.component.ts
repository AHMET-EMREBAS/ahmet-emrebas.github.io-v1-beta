import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
      group: 'Primary',
      placeholder: 'username',

      required: true,

      email: true,
    },

    {
      name: 'password',
      type: 'password',
      group: 'Primary',
      placeholder: 'password',

      required: true,

      password: true,
    },

    {
      name: 'permission',
      type: 'select-many',
      group: 'Primary',
      placeholder: 'permission',
      asyncOptions: this.permissionService.entities$,
      optionValue: 'id',
      optionLabel: 'name',
    },
  ];

  constructor(
    private readonly userService: UserService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly permissionService: PermissionService
  ) {}

  ngOnInit(): void {
    this.permissionService.getAsOptions(['id', 'name']);
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
      }
    }
  }

  private value(key: string) {
    return this.formGroup.get(key)?.value;
  }
}
