import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { FormManager } from 'material/form/form-builder';
import { InputAttributes } from 'material/form/shared-input';

import { SkuFormService } from '../sku-form.service';
import { Sku } from '../sku.interface';
import { SkuService } from '../sku.service';

@Component({
  selector: 'ae-create-sku',
  templateUrl: './create-sku.component.html',
  styleUrls: ['./create-sku.component.scss'],
})
export class CreateSkuComponent implements OnInit {
  @Input() submitLabel = 'Save Sku';
  @Input() defaultValue!: any;

  formGroup!: FormGroup;
  formFields!: Partial<Record<keyof Sku, InputAttributes>>;

  constructor(
    private readonly skuService: SkuService,
    private readonly skuFormService: SkuFormService
  ) {}

  formBuilder!: FormManager<Sku>;

  ngOnInit(): void {
    this.formGroup = this.skuFormService.createForm();
    this.formFields = this.skuFormService.createFormFields();
  }

  control(name: string) {
    return this.formGroup.get(name) as FormControl;
  }

  onSubmit(formValue: Sku) {
    this.skuService.add({ ...formValue });
  }

  field(name: keyof Sku) {
    return this.formFields[name];
  }
}
