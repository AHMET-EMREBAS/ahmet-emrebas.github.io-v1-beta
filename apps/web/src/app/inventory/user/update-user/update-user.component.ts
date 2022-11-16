import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IReadUser } from 'common/inventory/interfaces';
import { InputOptions, setFormGroupValue } from 'material/form';
import { UserService } from '../user.service';

import { PermissionService } from '../../permission';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ae-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss'],
})
export class UpdateUserComponent implements AfterViewInit {
  title = 'Update User';
  private itemToBeUpdated!: Partial<IReadUser>;

  formGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),

    password: new FormControl('', [
      Validators.required,

      Validators.pattern(/[A-Z]{1,}/),
      Validators.pattern(/[a-z]{1,}/),
      Validators.pattern(/[0-9]{1,}/),
      Validators.pattern(/[~!@#$%^&*()_+=-]{1,}/),
      Validators.minLength(6),
    ]),

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
    this.permissionService.getAll();
  }

  ngAfterViewInit(): void {
    const item = this.userService.getItemToBeUpdated();
    if (item) {
      this.itemToBeUpdated = item;
      setFormGroupValue(this.formGroup, item);
    }
  }

  submit() {
    if (this.formGroup.valid) {
      this.userService.update({
        id: this.itemToBeUpdated.id,

        username: this.value('username'),

        password: this.value('password'),

        permission: this.value('permission')?.id,
      });
    }
  }

  getOptions(name: string) {
    return JSON.parse(localStorage.getItem(name) || '[]');
  }

  private value(key: string) {
    return this.formGroup.get(key)?.value;
  }
}
