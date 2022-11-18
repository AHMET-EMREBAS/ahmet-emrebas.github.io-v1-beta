import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IReadStore } from 'common/inventory/interfaces';
import { InputOptions, setFormGroupValue } from 'material/form';
import { StoreService } from '../store.service';
import { firstValueFrom } from 'rxjs';

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
    name: new FormControl('', [
      Validators.required,

      Validators.minLength(2),

      Validators.maxLength(30),
    ]),

    pricelevel: new FormControl('', []),
  });

  fields: InputOptions[] = [
    {
      name: 'name',
      type: 'text',
      group: 'Primary',
      placeholder: 'name',

      required: true,

      minLength: 2,

      maxLength: 30,
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
    private readonly storeService: StoreService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly pricelevelService: PricelevelService
  ) {}

  ngOnInit(): void {
    this.pricelevelService.getAsOptions(['id', 'name']);
  }

  async ngAfterViewInit() {
    const __item = this.storeService.getItemToBeUpdated();
    if (__item) {
      this.itemToBeUpdated = await firstValueFrom(
        this.storeService.getByKey(__item.id)
      );
      setFormGroupValue(this.formGroup, this.itemToBeUpdated);
    }
  }

  submit() {
    if (this.formGroup.valid) {
      this.storeService.update({
        id: this.itemToBeUpdated.id,

        name: this.value('name'),

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
