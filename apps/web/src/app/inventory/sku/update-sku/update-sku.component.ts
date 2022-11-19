import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IReadSku } from 'common/inventory/interfaces';
import { InputOptions, setFormGroupValue } from 'material/form';
import { SkuService } from '../sku.service';
import { firstValueFrom } from 'rxjs';

import { MessageService as SystemMessageService } from 'primeng/api';

import { groupBy } from 'lodash';

import { ProductService } from '../../product';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ae-update-sku',
  templateUrl: './update-sku.component.html',
  styleUrls: ['./update-sku.component.scss'],
})
export class UpdateSkuComponent implements AfterViewInit, OnInit {
  title = 'Update Sku';
  private itemToBeUpdated!: Partial<IReadSku>;

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
      group: 'Primary',
      placeholder: 'name',

      required: true,

      minLength: 0,

      maxLength: 30,
    },

    {
      name: 'barcode',
      type: 'text',
      group: 'Primary',
      placeholder: 'barcode',

      required: true,

      minLength: 10,

      maxLength: 13,
    },

    {
      name: 'description',
      type: 'textarea',
      group: 'Primary',
      placeholder: 'description',

      minLength: 0,

      maxLength: 500,
    },

    {
      name: 'product',
      type: 'select',
      group: 'Primary',
      placeholder: 'product',
      asyncOptions: this.productService.entities$,
      optionValue: 'id',
      optionLabel: 'name',

      required: true,
    },
  ];

  groups = Object.entries(groupBy(this.fields, 'group'));

  constructor(
    private readonly skuService: SkuService,
    private readonly router: Router,
    private readonly systemMessageService: SystemMessageService,
    private readonly route: ActivatedRoute,
    private readonly productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productService.getAsOptions(['id', 'name']);
  }

  async ngAfterViewInit() {
    const __item = this.skuService.getItemToBeUpdated();
    if (__item) {
      this.itemToBeUpdated = await firstValueFrom(
        this.skuService.getByKey(__item.id)
      );
      setFormGroupValue(this.formGroup, this.itemToBeUpdated);
    }
  }

  submit() {
    if (this.formGroup.valid) {
      this.skuService.update({
        id: this.itemToBeUpdated.id,

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
