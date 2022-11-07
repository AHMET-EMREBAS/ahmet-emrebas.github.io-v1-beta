import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { FormManager } from 'material/form/form-builder';
import { InputAttributes } from 'material/form/shared-input';

import { QuantityFormService } from '../quantity-form.service';
import { Quantity } from '../quantity.interface';
import { QuantityService } from '../quantity.service';

@Component({
  selector: 'ae-create-quantity',
  templateUrl: './create-quantity.component.html',
  styleUrls: ['./create-quantity.component.scss'],
})
export class CreateQuantityComponent implements OnInit {
  @Input() submitLabel = 'Save Quantity';
  @Input() defaultValue!: any;

  formGroup!: FormGroup;
  formFields!: Partial<Record<keyof Quantity, InputAttributes>>;

  constructor(
    private readonly quantityService: QuantityService,
    private readonly quantityFormService: QuantityFormService
  ) {}

  formBuilder!: FormManager<Quantity>;

  ngOnInit(): void {
    this.formGroup = this.quantityFormService.createForm();
    this.formFields = this.quantityFormService.createFormFields();
  }

  control(name: string) {
    return this.formGroup.get(name) as FormControl;
  }

  onSubmit(formValue: Quantity) {
    this.quantityService.add({ ...formValue });
  }

  field(name: keyof Quantity) {
    return this.formFields[name];
  }
}
