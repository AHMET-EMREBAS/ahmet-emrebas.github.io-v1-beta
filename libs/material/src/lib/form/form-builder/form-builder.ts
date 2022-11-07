import {
  FormControl,
  FormGroup,
} from '@angular/forms';

import { NgrxDataService } from '../../data-services';
import { InputAttributes } from '../shared-input';
import { formControl } from './form-control';

export class FormManager<T = any> {
  private readonly fields: Partial<Record<keyof T, InputAttributes<T>>> = {};
  private readonly updateFields: Partial<Record<keyof T, InputAttributes<T>>> =
    {};

  private readonly controls: Partial<Record<keyof T, FormControl>> = {};
  private readonly updateControls: Partial<Record<keyof T, FormControl>> = {};

  private formGroup!: FormGroup;
  private updateFormGroup!: FormGroup;

  constructor(private readonly dataService: NgrxDataService<T>) {}

  add(options: InputAttributes<T>) {
    if (!options.name) {
      throw new Error('name must be provided!');
    }
    console.log(options);
    this.fields[options.name] = options;
    this.controls[options.name] = formControl(options, this.dataService);

    if (options.update !== false) {
      this.updateFields[options.name] = options;
      this.updateControls[options.name] = formControl(
        options,
        this.dataService
      );
    }

    return this;
  }

  newCreateForm() {
    this.formGroup = new FormGroup(
      this.controls as Record<keyof T, FormControl>
    );
    return this.formGroup;
  }

  newUpdateForm() {
    this.updateFormGroup = new FormGroup(
      this.updateControls as Record<keyof T, FormControl>
    );
    return this.updateFormGroup;
  }

  getField(name: keyof T): InputAttributes<T> {
    const field = this.fields[name];

    if (field) {
      return field;
    }
    throw new Error(name?.toString() + ' is not a form field!');
  }

  getUpdateField(name: keyof T): InputAttributes<T> {
    const field = this.updateFields[name];
    if (field) {
      return field;
    }
    throw new Error(name?.toString() + ' is not a form field!');
  }

  getControl(name: keyof T): FormControl {
    const c = this.controls[name];
    if (c) {
      return c;
    }
    throw new Error('Form control is not found!');
  }

  getFields() {
    return this.fields;
  }

  getUpdateFields() {
    return this.updateFields;
  }

  getControls() {
    return this.controls;
  }

  getUpdateControls() {
    return this.updateControls;
  }
}
