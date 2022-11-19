import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IReadPermission } from 'common/inventory/interfaces';
import { InputOptions, setFormGroupValue } from 'material/form';
import { PermissionService } from '../permission.service';
import { firstValueFrom } from 'rxjs';

import { MessageService as SystemMessageService } from 'primeng/api';

import { groupBy } from 'lodash';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ae-update-permission',
  templateUrl: './update-permission.component.html',
  styleUrls: ['./update-permission.component.scss'],
})
export class UpdatePermissionComponent implements AfterViewInit, OnInit {
  title = 'Update Permission';
  private itemToBeUpdated!: Partial<IReadPermission>;

  formGroup = new FormGroup({
    name: new FormControl(undefined, [
      Validators.required,

      Validators.minLength(3),

      Validators.maxLength(20),
    ]),

    description: new FormControl(undefined, [
      Validators.minLength(0),

      Validators.maxLength(50),
    ]),
  });

  fields: InputOptions[] = [
    {
      name: 'name',
      type: 'text',
      group: 'Primary',
      placeholder: 'name',

      required: true,

      minLength: 3,

      maxLength: 20,
    },

    {
      name: 'description',
      type: 'text',
      group: 'Primary',
      placeholder: 'description',

      minLength: 0,

      maxLength: 50,
    },
  ];

  groups = Object.entries(groupBy(this.fields, 'group'));

  constructor(
    private readonly permissionService: PermissionService,
    private readonly router: Router,
    private readonly systemMessageService: SystemMessageService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  async ngAfterViewInit() {
    const __item = this.permissionService.getItemToBeUpdated();
    if (__item) {
      this.itemToBeUpdated = await firstValueFrom(
        this.permissionService.getByKey(__item.id)
      );
      setFormGroupValue(this.formGroup, this.itemToBeUpdated);
    }
  }

  submit() {
    if (this.formGroup.valid) {
      this.permissionService.update({
        id: this.itemToBeUpdated.id,

        name: this.value('name'),

        description: this.value('description'),
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
