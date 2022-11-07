import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { FormManager } from 'material/form/form-builder';
import { InputAttributes } from 'material/form/shared-input';

import { PricelevelFormService } from '../pricelevel-form.service';
import { Pricelevel } from '../pricelevel.interface';
import { PricelevelService } from '../pricelevel.service';

@Component({
  selector: 'ae-create-pricelevel',
  templateUrl: './create-pricelevel.component.html',
  styleUrls: ['./create-pricelevel.component.scss'],
})
export class CreatePricelevelComponent implements OnInit {
  @Input() submitLabel = 'Save Pricelevel';
  @Input() defaultValue!: any;

  formGroup!: FormGroup;
  formFields!: Partial<Record<keyof Pricelevel, InputAttributes>>;

  constructor(
    private readonly pricelevelService: PricelevelService,
    private readonly pricelevelFormService: PricelevelFormService
  ) {}

  formBuilder!: FormManager<Pricelevel>;

  ngOnInit(): void {
    this.formGroup = this.pricelevelFormService.createForm();
    this.formFields = this.pricelevelFormService.createFormFields();
  }

  control(name: string) {
    return this.formGroup.get(name) as FormControl;
  }

  onSubmit(formValue: Pricelevel) {
    this.pricelevelService.add({ ...formValue });
  }

  field(name: keyof Pricelevel) {
    return this.formFields[name];
  }
}
