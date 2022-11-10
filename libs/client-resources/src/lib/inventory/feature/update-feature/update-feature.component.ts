import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { InputAttributes } from 'material/form/shared-input';
import { map, Observable, switchMap } from 'rxjs';

import { FeatureFormService } from '../feature-form.service';
import { Feature } from '../feature.interface';
import { FeatureService } from '../feature.service';

@Component({
  selector: 'ae-update-feature',
  templateUrl: './update-feature.component.html',
  styleUrls: ['./update-feature.component.scss'],
})
export class UpdateFeatureComponent implements OnInit {
  item$!: Observable<Partial<Feature>>;

  submitLabel = 'Update Feature';
  formGroup!: FormGroup;
  formFields!: Partial<Record<keyof Feature, InputAttributes>>;

  constructor(
    private readonly featureService: FeatureService,
    private readonly route: ActivatedRoute,
    private readonly featureFormService: FeatureFormService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.featureFormService.updateForm();
    this.formFields = this.featureFormService.updateFormFields();

    this.item$ = this.route.paramMap.pipe(
      switchMap((param) => this.featureService.getByKey(param.get('id'))),
      map((data) => data)
    );
  }

  control(name: string) {
    return this.formGroup.get(name) as FormControl;
  }

  field(name: keyof Feature) {
    return this.formFields[name];
  }

  update(formValue: Partial<Feature>, id: number) {
    this.featureService.update({ id, ...formValue });
    this.formGroup.reset();
  }
}
