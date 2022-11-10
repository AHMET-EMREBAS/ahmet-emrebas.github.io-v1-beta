import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { FormManager } from 'material/form/form-builder';
import { InputAttributes } from 'material/form/shared-input';

import { FeatureFormService } from '../feature-form.service';
import { Feature } from '../feature.interface';
import { FeatureService } from '../feature.service';

@Component({
  selector: 'ae-create-feature',
  templateUrl: './create-feature.component.html',
  styleUrls: ['./create-feature.component.scss'],
})
export class CreateFeatureComponent implements OnInit {
  @Input() submitLabel = 'Save Feature';
  @Input() defaultValue!: any;

  formGroup!: FormGroup;
  formFields!: Partial<Record<keyof Feature, InputAttributes>>;

  constructor(
    private readonly featureService: FeatureService,
    private readonly featureFormService: FeatureFormService
  ) {}

  formBuilder!: FormManager<Feature>;

  ngOnInit(): void {
    this.formGroup = this.featureFormService.createForm();
    this.formFields = this.featureFormService.createFormFields();
  }

  control(name: string) {
    return this.formGroup.get(name) as FormControl;
  }

  onSubmit(formValue: Feature) {
    this.featureService.add({ ...formValue });
  }

  field(name: keyof Feature) {
    return this.formFields[name];
  }
}
