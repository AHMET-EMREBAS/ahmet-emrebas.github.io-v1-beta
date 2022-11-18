import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IReadPrice } from 'common/inventory/interfaces';
import { InputOptions, setFormGroupValue } from 'material/form';
import { PriceService } from '../price.service';
import { firstValueFrom } from 'rxjs';

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
      group: 'Primary',
      placeholder: 'price',

      min: 0,

      max: 999999999999,
    },

    {
      name: 'cost',
      type: 'number',
      group: 'Primary',
      placeholder: 'cost',

      min: 0,

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
    private readonly priceService: PriceService,
    private readonly router: Router,
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
    }
  }

  submit() {
    if (this.formGroup.valid) {
      this.priceService.update({
        id: this.itemToBeUpdated.id,

        price: this.value('price'),

        cost: this.value('cost'),

        sku: this.value('sku')?.id,

        pricelevel: this.value('pricelevel')?.id,
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
