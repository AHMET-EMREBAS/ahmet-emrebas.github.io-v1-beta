import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { InputAttributes } from 'material/form/shared-input';
import { map, Observable, switchMap } from 'rxjs';

import { LocationFormService } from '../location-form.service';
import { Location } from '../location.interface';
import { LocationService } from '../location.service';

@Component({
  selector: 'ae-update-location',
  templateUrl: './update-location.component.html',
  styleUrls: ['./update-location.component.scss'],
})
export class UpdateLocationComponent implements OnInit {
  item$!: Observable<Partial<Location>>;

  submitLabel = 'Update Location';
  formGroup!: FormGroup;
  formFields!: Partial<Record<keyof Location, InputAttributes>>;

  constructor(
    private readonly locationService: LocationService,
    private readonly route: ActivatedRoute,
    private readonly locationFormService: LocationFormService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.locationFormService.updateForm();
    this.formFields = this.locationFormService.updateFormFields();

    this.item$ = this.route.paramMap.pipe(
      switchMap((param) => this.locationService.getByKey(param.get('id'))),
      map((data) => data)
    );
  }

  control(name: string) {
    return this.formGroup.get(name) as FormControl;
  }

  field(name: keyof Location) {
    return this.formFields[name];
  }

  update(formValue: Partial<Location>, id: number) {
    this.locationService.update({ id, ...formValue });
    this.formGroup.reset();
  }
}
