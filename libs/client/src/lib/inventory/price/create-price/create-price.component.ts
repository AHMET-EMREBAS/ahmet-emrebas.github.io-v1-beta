import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { InputOptions } from 'material/form';

import { PriceService } from '../price.service';

import { SkuService } from '../../sku';

import { PricelevelService } from '../../pricelevel';

@Component({
  selector: 'ae-create-price',
  templateUrl: './create-price.component.html',
  styleUrls: ['./create-price.component.scss'],
})
export class CreatePriceComponent {
  submitted = false;
  title = 'Create Price';
  formGroup = new FormGroup({
    price: new FormControl('', [
      Validators.min(0),

      Validators.max(999999999999),
    ]),

    cost: new FormControl('', [
      Validators.min(0),

      Validators.max(999999999999),
    ]),

    sku: new FormControl('', []),

    pricelevel: new FormControl('', []),
  });

  fields: InputOptions[] = [
    {
      name: 'price',
      type: 'number',
      placeholder: 'price',

      min: 0,

      max: 999999999999,
    },

    {
      name: 'cost',
      type: 'number',
      placeholder: 'cost',

      min: 0,

      max: 999999999999,
    },

    {
      name: 'sku',
      type: 'select',
      placeholder: 'sku',
      asyncOptions: this.skuService.entities$,
      optionValue: 'id',
      optionLabel: 'name',
    },

    {
      name: 'pricelevel',
      type: 'select',
      placeholder: 'pricelevel',
      asyncOptions: this.pricelevelService.entities$,
      optionValue: 'id',
      optionLabel: 'name',
    },
  ];

  constructor(
    private readonly priceService: PriceService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly skuService: SkuService,
    private readonly pricelevelService: PricelevelService
  ) {
    this.priceService.getAll();
    this.skuService.getAll();
    this.pricelevelService.getAll();
  }

  submit() {
    if (this.submitted === false) {
      if (this.formGroup.valid) {
        this.submitted = true;
        this.priceService.add({
          price: this.value('price'),

          cost: this.value('cost'),

          sku: this.value('sku')?.id,

          pricelevel: this.value('pricelevel')?.id,
        });
      }
    }
  }

  private value(key: string) {
    return this.formGroup.get(key)?.value;
  }
}
