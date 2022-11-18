import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { InputOptions } from 'material/form';

import { StoreService } from '../store.service';

import { PricelevelService } from '../../pricelevel';

@Component({
  selector: 'ae-create-store',
  templateUrl: './create-store.component.html',
  styleUrls: ['./create-store.component.scss'],
})
export class CreateStoreComponent implements OnInit {
  submitted = false;
  title = 'Create Store';
  formGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,

      Validators.minLength(2),

      Validators.maxLength(30),
    ]),

    pricelevel: new FormControl('', []),
  });

  fields: InputOptions[] = [
    {
      name: 'name',
      type: 'text',
      group: 'Primary',
      placeholder: 'name',

      required: true,

      minLength: 2,

      maxLength: 30,
    },

    {
      name: 'pricelevel',
      type: 'select',
      group: 'Primary',
      placeholder: 'pricelevel',
      asyncOptions: this.pricelevelService.entities$,
      optionValue: 'id',
      optionLabel: 'name',
    },
  ];

  constructor(
    private readonly storeService: StoreService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly pricelevelService: PricelevelService
  ) {}

  ngOnInit(): void {
    this.pricelevelService.getAsOptions(['id', 'name']);
  }

  submit() {
    if (this.submitted === false) {
      if (this.formGroup.valid) {
        this.submitted = true;
        this.storeService.add({
          name: this.value('name'),

          pricelevel: this.value('pricelevel')?.id,
        });
      }
    }
  }

  private value(key: string) {
    return this.formGroup.get(key)?.value;
  }
}
