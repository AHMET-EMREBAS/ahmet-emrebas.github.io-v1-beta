import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IReadUser } from 'common/inventory/interfaces';
import { InputOptions, setFormGroupValue } from 'material/form';
import { UserService } from '../user.service';
import { firstValueFrom } from 'rxjs';

import { MessageService as SystemMessageService } from 'primeng/api';

import { groupBy } from 'lodash';

import { PermissionService } from '../../permission';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ae-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss'],
})
export class UpdateUserComponent implements AfterViewInit, OnInit {
  title = 'Update User';
  private itemToBeUpdated!: Partial<IReadUser>;

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
    private readonly router: Router,
    private readonly systemMessageService: SystemMessageService,
    private readonly route: ActivatedRoute,
    private readonly permissionService: PermissionService
  ) {}

  ngOnInit(): void {
    this.permissionService.getAsOptions(['id', 'description']);
  }

  async ngAfterViewInit() {
    const __item = this.userService.getItemToBeUpdated();
    if (__item) {
      this.itemToBeUpdated = await firstValueFrom(
        this.userService.getByKey(__item.id)
      );
      setFormGroupValue(this.formGroup, this.itemToBeUpdated);
      return;
    }
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  submit() {
    if (this.formGroup.valid) {
      this.userService.update({
        id: this.itemToBeUpdated.id,

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

  getOptions(name: string) {
    return JSON.parse(localStorage.getItem(name) || '[]');
  }

  private value(key: string) {
    return this.formGroup.get(key)?.value;
  }
}
