import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { InputOptions } from 'material/form';

import { PermissionService } from '../permission.service';

@Component({
  selector: 'ae-create-permission',
  templateUrl: './create-permission.component.html',
  styleUrls: ['./create-permission.component.scss'],
})
export class CreatePermissionComponent implements OnInit {
  submitted = false;
  title = 'Create Permission';
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

  constructor(
    private readonly permissionService: PermissionService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  submit() {
    if (this.submitted === false) {
      if (this.formGroup.valid) {
        this.submitted = true;
        this.permissionService.add({
          name: this.value('name'),

          description: this.value('description'),
        });
      }
    }
  }

  private value(key: string) {
    return this.formGroup.get(key)?.value;
  }
}
