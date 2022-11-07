import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { InputAttributes } from 'material/form/shared-input';
import { map, Observable, switchMap } from 'rxjs';

import { StoreFormService } from '../store-form.service';
import { Store } from '../store.interface';
import { StoreService } from '../store.service';

@Component({
  selector: 'ae-update-store',
  templateUrl: './update-store.component.html',
  styleUrls: ['./update-store.component.scss'],
})
export class UpdateStoreComponent implements OnInit {
  item$!: Observable<Partial<Store>>;

  submitLabel = 'Update Store';
  formGroup!: FormGroup;
  formFields!: Partial<Record<keyof Store, InputAttributes>>;

  constructor(
    private readonly storeService: StoreService,
    private readonly route: ActivatedRoute,
    private readonly storeFormService: StoreFormService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.storeFormService.updateForm();
    this.formFields = this.storeFormService.updateFormFields();

    this.item$ = this.route.paramMap.pipe(
      switchMap((param) => this.storeService.getByKey(param.get('id'))),
      map((data) => data)
    );
  }

  control(name: string) {
    return this.formGroup.get(name) as FormControl;
  }

  field(name: keyof Store) {
    return this.formFields[name];
  }

  update(formValue: Partial<Store>, id: number) {
    this.storeService.update({ id, ...formValue });
    this.formGroup.reset();
  }
}
