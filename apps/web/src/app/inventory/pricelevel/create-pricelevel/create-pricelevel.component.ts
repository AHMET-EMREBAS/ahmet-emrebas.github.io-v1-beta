import { Component, OnInit } from '@angular/core';
import { MessageService as SystemMessageService } from 'primeng/api';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { groupBy } from 'lodash';
import { InputOptions } from 'material/form';

import { PricelevelService } from '../pricelevel.service';

@Component({
  selector: 'ae-create-pricelevel',
  templateUrl: './create-pricelevel.component.html',
  styleUrls: ['./create-pricelevel.component.scss'],
})
export class CreatePricelevelComponent implements OnInit {
  submitted = false;
  title = 'Create Pricelevel';
  formGroup = new FormGroup({
    name: new FormControl(undefined, [
      Validators.required,

      Validators.minLength(3),

      Validators.maxLength(20),
    ]),
  });

  fields: InputOptions[] = [
    {
      name: 'name',
      type: 'text',
      group: 'Price Level',
      placeholder: 'name',

      required: true,

      minLength: 3,

      maxLength: 20,
    },
  ];

  groups = Object.entries(groupBy(this.fields, 'group'));

  constructor(
    private readonly pricelevelService: PricelevelService,
    private readonly systemMessageService: SystemMessageService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  submit() {
    if (this.submitted === false) {
      if (this.formGroup.valid) {
        this.submitted = true;
        this.pricelevelService.add({
          name: this.value('name'),
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
