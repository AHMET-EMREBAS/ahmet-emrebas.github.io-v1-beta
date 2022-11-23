import { Component, OnInit } from '@angular/core';
import { MessageService as SystemMessageService } from 'primeng/api';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { groupBy } from 'material/utils';
import { InputOptions } from 'material/form';

import { PriceService } from '../price.service';

import { SkuService } from '../../sku';

import { PricelevelService } from '../../pricelevel';

@Component({
  selector: 'ae-create-price',
  templateUrl: './create-price.component.html',
  styleUrls: ['./create-price.component.scss'],
})
export class CreatePriceComponent implements OnInit {
  submitted = false;
  title = 'Create Price';
  formGroup = new FormGroup({
    price: new FormControl(undefined, [
      Validators.min(0),

      Validators.max(999999999999),
    ]),

    cost: new FormControl(undefined, [
      Validators.min(0),

      Validators.max(999999999999),
    ]),

    sku: new FormControl(undefined, []),

    pricelevel: new FormControl(undefined, []),
  });

  fields: InputOptions[] = [
    {
      name: 'price',
      type: 'currency',
      group: 'Price',
      placeholder: 'price',

      min: 0,

      max: 999999999999,
    },

    {
      name: 'cost',
      type: 'currency',
      group: 'Price',
      placeholder: 'cost',

      min: 0,

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
    },

    {
      name: 'pricelevel',
      type: 'select',
      group: 'Meta',
      placeholder: 'Select Pricelevel',
      asyncOptions: this.pricelevelService.entities$,
      optionValue: 'id',
      optionLabel: 'name',
    },
  ];

  groups = Object.entries(groupBy<InputOptions>(this.fields, 'group'));

  constructor(
    private readonly priceService: PriceService,
    private readonly systemMessageService: SystemMessageService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly skuService: SkuService,
    private readonly pricelevelService: PricelevelService
  ) {}

  ngOnInit(): void {
    this.skuService.clearCache();
    this.skuService.getAsOptions(['id', 'name']);

    this.pricelevelService.clearCache();
    this.pricelevelService.getAsOptions(['id', 'name']);
  }

  submit() {
    if (this.submitted === false) {
      if (this.formGroup.valid) {
        this.submitted = true;
        this.priceService.add({
          price: this.value('price'),

          cost: this.value('cost'),

          sku: this.value('sku'),

          pricelevel: this.value('pricelevel'),
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
