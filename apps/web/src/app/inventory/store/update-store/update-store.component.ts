import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IReadStore } from 'common/inventory/interfaces';
import { InputOptions, setFormGroupValue } from 'material/form';
import { StoreService } from '../store.service';
import { firstValueFrom } from 'rxjs';

import { MessageService as SystemMessageService } from 'primeng/api';

import { groupBy } from 'lodash';

import { PricelevelService } from '../../pricelevel';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ae-update-store',
  templateUrl: './update-store.component.html',
  styleUrls: ['./update-store.component.scss'],
})
export class UpdateStoreComponent implements AfterViewInit, OnInit {
  title = 'Update Store';
  private itemToBeUpdated!: Partial<IReadStore>;

  formGroup = new FormGroup({
    name: new FormControl(undefined, [
      Validators.required,

      Validators.minLength(2),

      Validators.maxLength(30),
    ]),

    pricelevel: new FormControl(undefined, []),
  });

  fields: InputOptions[] = [
    {
      name: 'name',
      type: 'text',
      group: 'Store',
      placeholder: 'name',

      required: true,

      minLength: 2,

      maxLength: 30,
    },

    {
      name: 'pricelevel',
      type: 'select',
      group: 'Price Level',
      placeholder: 'Select Pricelevel',
      asyncOptions: this.pricelevelService.entities$,
      optionValue: 'id',
      optionLabel: 'name',
    },
  ];

  groups = Object.entries(groupBy(this.fields, 'group'));

  constructor(
    private readonly storeService: StoreService,
    private readonly router: Router,
    private readonly systemMessageService: SystemMessageService,
    private readonly route: ActivatedRoute,
    private readonly pricelevelService: PricelevelService
  ) {}

  ngOnInit(): void {
    this.pricelevelService.clearCache();
    this.pricelevelService.getAsOptions(['id', 'name']);
  }

  async ngAfterViewInit() {
    const __item = this.storeService.getItemToBeUpdated();
    if (__item) {
      this.itemToBeUpdated = await firstValueFrom(
        this.storeService.getByKey(__item.id)
      );
      setFormGroupValue(this.formGroup, this.itemToBeUpdated);
      return;
    }
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  submit() {
    if (this.formGroup.valid) {
      this.storeService.update({
        id: this.itemToBeUpdated.id,

        name: this.value('name'),

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
