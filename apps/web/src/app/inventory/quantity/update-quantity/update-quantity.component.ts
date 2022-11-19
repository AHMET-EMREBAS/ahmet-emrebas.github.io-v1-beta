import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IReadQuantity } from 'common/inventory/interfaces';
import { InputOptions, setFormGroupValue } from 'material/form';
import { QuantityService } from '../quantity.service';
import { firstValueFrom } from 'rxjs';

import { SkuService } from '../../sku';

import { StoreService } from '../../store';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ae-update-quantity',
  templateUrl: './update-quantity.component.html',
  styleUrls: ['./update-quantity.component.scss'],
})
export class UpdateQuantityComponent implements AfterViewInit, OnInit {
  title = 'Update Quantity';
  private itemToBeUpdated!: Partial<IReadQuantity>;

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
      group: 'Primary',
      placeholder: 'quantity',

      required: true,

      min: -200,

      max: 999999999999,
    },

    {
      name: 'sku',
      type: 'select',
      group: 'Primary',
      placeholder: 'sku',
      asyncOptions: this.skuService.entities$,
      optionValue: 'id',
      optionLabel: 'name',

      required: true,
    },

    {
      name: 'store',
      type: 'select',
      group: 'Primary',
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

  async ngAfterViewInit() {
    const __item = this.quantityService.getItemToBeUpdated();
    if (__item) {
      this.itemToBeUpdated = await firstValueFrom(
        this.quantityService.getByKey(__item.id)
      );
      setFormGroupValue(this.formGroup, this.itemToBeUpdated);
    }
  }

  submit() {
    if (this.formGroup.valid) {
      this.quantityService.update({
        id: this.itemToBeUpdated.id,

        quantity: this.value('quantity'),

        sku: this.value('sku'),

        store: this.value('store'),
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
