import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { FormManager } from 'material/form/form-builder';
import { InputAttributes } from 'material/form/shared-input';

import { PriceFormService } from '../price-form.service';
import { Price } from '../price.interface';
import { PriceService } from '../price.service';

@Component({
  selector: 'ae-create-price',
  templateUrl: './create-price.component.html',
  styleUrls: ['./create-price.component.scss'],
})
export class CreatePriceComponent implements OnInit {
  @Input() submitLabel = 'Save Price';
  @Input() defaultValue!: any;

  formGroup!: FormGroup;
  formFields!: Partial<Record<keyof Price, InputAttributes>>;

  constructor(
    private readonly priceService: PriceService,
    private readonly priceFormService: PriceFormService
  ) {}

  formBuilder!: FormManager<Price>;

  ngOnInit(): void {
    this.formGroup = this.priceFormService.createForm();
    this.formFields = this.priceFormService.createFormFields();
  }

  control(name: string) {
    return this.formGroup.get(name) as FormControl;
  }

  onSubmit(formValue: Price) {
    this.priceService.add({ ...formValue });
  }

  field(name: keyof Price) {
    return this.formFields[name];
  }
}
