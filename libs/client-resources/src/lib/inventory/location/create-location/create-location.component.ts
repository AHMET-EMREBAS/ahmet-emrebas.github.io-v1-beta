import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { FormManager } from 'material/form/form-builder';
import { InputAttributes } from 'material/form/shared-input';

import { LocationFormService } from '../location-form.service';
import { Location } from '../location.interface';
import { LocationService } from '../location.service';

@Component({
  selector: 'ae-create-location',
  templateUrl: './create-location.component.html',
  styleUrls: ['./create-location.component.scss'],
})
export class CreateLocationComponent implements OnInit {
  @Input() submitLabel = 'Save Location';
  @Input() defaultValue!: any;

  formGroup!: FormGroup;
  formFields!: Partial<Record<keyof Location, InputAttributes>>;

  constructor(
    private readonly locationService: LocationService,
    private readonly locationFormService: LocationFormService
  ) {}

  formBuilder!: FormManager<Location>;

  ngOnInit(): void {
    this.formGroup = this.locationFormService.createForm();
    this.formFields = this.locationFormService.createFormFields();
  }

  control(name: string) {
    return this.formGroup.get(name) as FormControl;
  }

  onSubmit(formValue: Location) {
    this.locationService.add({ ...formValue });
  }

  field(name: keyof Location) {
    return this.formFields[name];
  }
}
