import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IReadPermission } from 'common/inventory/interfaces';
import { InputOptions, setFormGroupValue } from 'material/form';
import { PermissionService } from '../permission.service';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ae-update-permission',
  templateUrl: './update-permission.component.html',
  styleUrls: ['./update-permission.component.scss'],
})
export class UpdatePermissionComponent implements AfterViewInit {
  title = 'Update Permission';
  private itemToBeUpdated!: Partial<IReadPermission>;

  formGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,

      Validators.minLength(3),

      Validators.maxLength(20),
    ]),

    description: new FormControl('', [
      Validators.minLength(0),

      Validators.maxLength(50),
    ]),
  });

  fields: InputOptions[] = [
    {
      name: 'name',
      type: 'text',
      placeholder: 'name',

      required: true,

      minLength: 3,

      maxLength: 20,
    },

    {
      name: 'description',
      type: 'text',
      placeholder: 'description',

      minLength: 0,

      maxLength: 50,
    },
  ];

  constructor(
    private readonly permissionService: PermissionService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
    this.permissionService.getAll();
  }

  ngAfterViewInit(): void {
    const item = this.permissionService.getItemToBeUpdated();
    if (item) {
      this.itemToBeUpdated = item;
      setFormGroupValue(this.formGroup, item);
    }
  }

  submit() {
    if (this.formGroup.valid) {
      this.permissionService.update({
        id: this.itemToBeUpdated.id,

        name: this.value('name'),

        description: this.value('description'),
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
