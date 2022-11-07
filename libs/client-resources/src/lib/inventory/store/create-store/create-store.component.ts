import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { FormManager } from 'material/form/form-builder';
import { InputAttributes } from 'material/form/shared-input';

import { StoreFormService } from '../store-form.service';
import { Store } from '../store.interface';
import { StoreService } from '../store.service';

@Component({
  selector: 'ae-create-store',
  templateUrl: './create-store.component.html',
  styleUrls: ['./create-store.component.scss'],
})
export class CreateStoreComponent implements OnInit {
  @Input() submitLabel = 'Save Store';
  @Input() defaultValue!: any;

  formGroup!: FormGroup;
  formFields!: Partial<Record<keyof Store, InputAttributes>>;

  constructor(
    private readonly storeService: StoreService,
    private readonly storeFormService: StoreFormService
  ) {}

  formBuilder!: FormManager<Store>;

  ngOnInit(): void {
    this.formGroup = this.storeFormService.createForm();
    this.formFields = this.storeFormService.createFormFields();
  }

  control(name: string) {
    return this.formGroup.get(name) as FormControl;
  }

  onSubmit(formValue: Store) {
    this.storeService.add({ ...formValue });
  }

  field(name: keyof Store) {
    return this.formFields[name];
  }
}
