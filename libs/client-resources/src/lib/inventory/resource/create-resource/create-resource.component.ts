import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { FormManager } from 'material/form/form-builder';
import { InputAttributes } from 'material/form/shared-input';

import { ResourceFormService } from '../resource-form.service';
import { Resource } from '../resource.interface';
import { ResourceService } from '../resource.service';

@Component({
  selector: 'ae-create-resource',
  templateUrl: './create-resource.component.html',
  styleUrls: ['./create-resource.component.scss'],
})
export class CreateResourceComponent implements OnInit {
  @Input() submitLabel = 'Save Resource';
  @Input() defaultValue!: any;

  formGroup!: FormGroup;
  formFields!: Partial<Record<keyof Resource, InputAttributes>>;

  constructor(
    private readonly resourceService: ResourceService,
    private readonly resourceFormService: ResourceFormService
  ) {}

  formBuilder!: FormManager<Resource>;

  ngOnInit(): void {
    this.formGroup = this.resourceFormService.createForm();
    this.formFields = this.resourceFormService.createFormFields();
  }

  control(name: string) {
    return this.formGroup.get(name) as FormControl;
  }

  onSubmit(formValue: Resource) {
    this.resourceService.add({ ...formValue });
  }

  field(name: keyof Resource) {
    return this.formFields[name];
  }
}
