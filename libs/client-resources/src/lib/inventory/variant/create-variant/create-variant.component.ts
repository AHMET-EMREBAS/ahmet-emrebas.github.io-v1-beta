import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { FormManager } from 'material/form/form-builder';
import { InputAttributes } from 'material/form/shared-input';

import { VariantFormService } from '../variant-form.service';
import { Variant } from '../variant.interface';
import { VariantService } from '../variant.service';

@Component({
  selector: 'ae-create-variant',
  templateUrl: './create-variant.component.html',
  styleUrls: ['./create-variant.component.scss'],
})
export class CreateVariantComponent implements OnInit {
  @Input() submitLabel = 'Save Variant';
  @Input() defaultValue!: any;

  formGroup!: FormGroup;
  formFields!: Partial<Record<keyof Variant, InputAttributes>>;

  constructor(
    private readonly variantService: VariantService,
    private readonly variantFormService: VariantFormService
  ) {}

  formBuilder!: FormManager<Variant>;

  ngOnInit(): void {
    this.formGroup = this.variantFormService.createForm();
    this.formFields = this.variantFormService.createFormFields();
  }

  control(name: string) {
    return this.formGroup.get(name) as FormControl;
  }

  onSubmit(formValue: Variant) {
    this.variantService.add({ ...formValue });
  }

  field(name: keyof Variant) {
    return this.formFields[name];
  }
}
