import { Component, OnInit } from '@angular/core';
import { MessageService as SystemMessageService } from 'primeng/api';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { groupBy } from 'lodash';
import { InputOptions } from 'material/form';

import { SkuService } from '../sku.service';

import { ProductService } from '../../product';

@Component({
  selector: 'ae-create-sku',
  templateUrl: './create-sku.component.html',
  styleUrls: ['./create-sku.component.scss'],
})
export class CreateSkuComponent implements OnInit {
  submitted = false;
  title = 'Create Sku';
  formGroup = new FormGroup({
    name: new FormControl(undefined, [
      Validators.required,

      Validators.minLength(0),

      Validators.maxLength(30),
    ]),

    barcode: new FormControl(undefined, [
      Validators.required,

      Validators.minLength(10),

      Validators.maxLength(13),
    ]),

    description: new FormControl(undefined, [
      Validators.minLength(0),

      Validators.maxLength(500),
    ]),

    product: new FormControl(undefined, [Validators.required]),
  });

  fields: InputOptions[] = [
    {
      name: 'name',
      type: 'text',
      group: 'Sku',
      placeholder: 'name',

      required: true,

      minLength: 0,

      maxLength: 30,
    },

    {
      name: 'barcode',
      type: 'text',
      group: 'Sku',
      placeholder: 'barcode',

      required: true,

      minLength: 10,

      maxLength: 13,
    },

    {
      name: 'description',
      type: 'textarea',
      group: 'Sku',
      placeholder: 'description',

      minLength: 0,

      maxLength: 500,
    },

    {
      name: 'product',
      type: 'select',
      group: 'Product',
      placeholder: 'name',
      asyncOptions: this.productService.entities$,
      optionValue: 'id',
      optionLabel: 'name',

      required: true,
    },
  ];

  groups = Object.entries(groupBy(this.fields, 'group'));

  constructor(
    private readonly skuService: SkuService,
    private readonly systemMessageService: SystemMessageService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productService.getAsOptions(['id', 'name']);
  }

  submit() {
    if (this.submitted === false) {
      if (this.formGroup.valid) {
        this.submitted = true;
        this.skuService.add({
          name: this.value('name'),

          barcode: this.value('barcode'),

          description: this.value('description'),

          product: this.value('product'),
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
