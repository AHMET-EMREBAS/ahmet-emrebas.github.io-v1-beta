import {
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

import { IReadUser } from 'common/inventory/interfaces';
import {
  InputOptions,
  setFormGroupValue,
} from 'material/form';
import { firstValueFrom } from 'rxjs';

import { PermissionService } from '../../permission';
import { UserService } from '../user.service';

@Component({
  selector: 'ae-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss'],
})
export class UpdateUserComponent implements AfterViewInit, OnInit {
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

    permission: new FormControl('', []),
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

  async ngAfterViewInit() {
    const __item = this.userService.getItemToBeUpdated();
    if (__item) {
      this.itemToBeUpdated = await firstValueFrom(
        this.userService.getByKey(__item.id)
      );
      console.log(this.itemToBeUpdated);
      setFormGroupValue(this.formGroup, this.itemToBeUpdated);
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
