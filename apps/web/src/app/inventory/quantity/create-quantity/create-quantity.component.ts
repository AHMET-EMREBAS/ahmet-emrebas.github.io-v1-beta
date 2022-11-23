import { Component, OnInit } from '@angular/core';
import { MessageService as SystemMessageService } from 'primeng/api';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { groupBy } from 'material/utils';
import { InputOptions } from 'material/form';

import { QuantityService } from '../quantity.service';

import { SkuService } from '../../sku';

import { StoreService } from '../../store';

@Component({
  selector: 'ae-create-quantity',
  templateUrl: './create-quantity.component.html',
  styleUrls: ['./create-quantity.component.scss'],
})
export class CreateQuantityComponent implements OnInit {
  submitted = false;
  title = 'Create Quantity';
  formGroup = new FormGroup({
    quantity: new FormControl(undefined, [
      Validators.required,

      Validators.min(-200),

      Validators.max(999999999999),
    ]),

    sku: new FormControl(undefined, [Validators.required]),

    store: new FormControl(undefined, [Validators.required]),
  });

  fields: InputOptions[] = [
    {
      name: 'quantity',
      type: 'number',
      group: 'Quantity',
      placeholder: 'quantity',

      required: true,

      min: -200,

      max: 999999999999,
    },

    {
      name: 'sku',
      type: 'select',
      group: 'Meta',
      placeholder: 'Select Sku',
      asyncOptions: this.skuService.entities$,
      optionValue: 'id',
      optionLabel: 'name',

      required: true,
    },

    {
      name: 'store',
      type: 'select',
      group: 'Meta',
      placeholder: 'Select Store',
      asyncOptions: this.storeService.entities$,
      optionValue: 'id',
      optionLabel: 'name',

      required: true,
    },
  ];

  groups = Object.entries(groupBy<InputOptions>(this.fields, 'group'));

  constructor(
    private readonly quantityService: QuantityService,
    private readonly systemMessageService: SystemMessageService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly skuService: SkuService,
    private readonly storeService: StoreService
  ) {}

  ngOnInit(): void {
    this.skuService.clearCache();
    this.skuService.getAsOptions(['id', 'name']);

    this.storeService.clearCache();
    this.storeService.getAsOptions(['id', 'name']);
  }

  submit() {
    if (this.submitted === false) {
      if (this.formGroup.valid) {
        this.submitted = true;
        this.quantityService.add({
          quantity: this.value('quantity'),

          sku: this.value('sku'),

          store: this.value('store'),
        });
      } else {
        const e = Object.entries(this.formGroup.controls).filter(
          (e) => e[1].errors
        )[0];

        this.systemMessageService.add({
          key: 'resource',
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
