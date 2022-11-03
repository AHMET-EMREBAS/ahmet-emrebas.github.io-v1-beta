import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { NgrxDataService } from '../../data-services';
import { HtmlInputOptions } from '../shared-input';

@Component({
  template: '',
})
export class BaseResourceFormComponent<T> {
  formGroup!: FormGroup;
  formFields!: Partial<Record<keyof T, HtmlInputOptions>>;

  constructor(private readonly dataService: NgrxDataService<T>) {}

  onSubmit(formValue: T) {
    this.dataService.add(formValue);
  }

  field(name: keyof T) {
    return this.formFields[name];
  }
}
