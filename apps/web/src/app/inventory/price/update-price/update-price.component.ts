import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IReadPrice } from 'common/inventory/interfaces';
import { InputOptions, setFormGroupValue } from 'material/form';
import { PriceService } from '../price.service';
import { firstValueFrom } from 'rxjs';

import { MessageService as SystemMessageService } from 'primeng/api';

import { groupBy } from 'lodash';

import { SkuService } from '../../sku';

import { PricelevelService } from '../../pricelevel';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ae-update-price',
  templateUrl: './update-price.component.html',
  styleUrls: ['./update-price.component.scss'],
})
export class UpdatePriceComponent implements AfterViewInit, OnInit {
  title = 'Update Price';
  private itemToBeUpdated!: Partial<IReadPrice>;

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
      placeholder: 'name',
      asyncOptions: this.skuService.entities$,
      optionValue: 'id',
      optionLabel: 'name',
    },

    {
      name: 'pricelevel',
      type: 'select',
      group: 'Meta',
      placeholder: 'name',
      asyncOptions: this.pricelevelService.entities$,
      optionValue: 'id',
      optionLabel: 'name',
    },
  ];

  groups = Object.entries(groupBy(this.fields, 'group'));

  constructor(
    private readonly priceService: PriceService,
    private readonly router: Router,
    private readonly systemMessageService: SystemMessageService,
    private readonly route: ActivatedRoute,
    private readonly skuService: SkuService,
    private readonly pricelevelService: PricelevelService
  ) {}

  ngOnInit(): void {
    this.skuService.getAsOptions(['id', 'name']);

    this.pricelevelService.getAsOptions(['id', 'name']);
  }

  async ngAfterViewInit() {
    const __item = this.priceService.getItemToBeUpdated();
    if (__item) {
      this.itemToBeUpdated = await firstValueFrom(
        this.priceService.getByKey(__item.id)
      );
      setFormGroupValue(this.formGroup, this.itemToBeUpdated);
      return;
    }
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  submit() {
    if (this.formGroup.valid) {
      this.priceService.update({
        id: this.itemToBeUpdated.id,

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

  getOptions(name: string) {
    return JSON.parse(localStorage.getItem(name) || '[]');
  }

  private value(key: string) {
    return this.formGroup.get(key)?.value;
  }
}
