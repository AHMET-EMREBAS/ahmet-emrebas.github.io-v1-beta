import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
    quantity: new FormControl('', [
      Validators.required,

      Validators.min(-200),

      Validators.max(999999999999),
    ]),

    sku: new FormControl('', [Validators.required]),

    store: new FormControl('', [Validators.required]),
  });

  fields: InputOptions[] = [
    {
      name: 'quantity',
      type: 'number',
      placeholder: 'quantity',

      required: true,

      min: -200,

      max: 999999999999,
    },

    {
      name: 'sku',
      type: 'select',
      placeholder: 'sku',
      asyncOptions: this.skuService.entities$,
      optionValue: 'id',
      optionLabel: 'name',

      required: true,
    },

    {
      name: 'store',
      type: 'select',
      placeholder: 'store',
      asyncOptions: this.storeService.entities$,
      optionValue: 'id',
      optionLabel: 'name',

      required: true,
    },
  ];

  constructor(
    private readonly quantityService: QuantityService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly skuService: SkuService,
    private readonly storeService: StoreService
  ) {}

  ngOnInit(): void {
    this.skuService.getAsOptions(['id', 'name']);

    this.storeService.getAsOptions(['id', 'name']);
  }

  submit() {
    if (this.submitted === false) {
      if (this.formGroup.valid) {
        this.submitted = true;
        this.quantityService.add({
          quantity: this.value('quantity'),

          sku: this.value('sku')?.id,

          store: this.value('store')?.id,
        });
      }
    }
  }

  private value(key: string) {
    return this.formGroup.get(key)?.value;
  }
}
