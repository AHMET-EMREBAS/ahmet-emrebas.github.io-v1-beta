import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { InputAttributes } from 'material/form/shared-input';
import { map, Observable, switchMap } from 'rxjs';

import { SampleFormService } from '../sample-form.service';
import { Sample } from '../sample.interface';
import { SampleService } from '../sample.service';

@Component({
  selector: 'ae-update-sample',
  templateUrl: './update-sample.component.html',
  styleUrls: ['./update-sample.component.scss'],
})
export class UpdateSampleComponent implements OnInit {
  item$!: Observable<Partial<Sample>>;

  submitLabel = 'Update Sample';
  formGroup!: FormGroup;
  formFields!: Partial<Record<keyof Sample, InputAttributes>>;

  constructor(
    private readonly sampleService: SampleService,
    private readonly route: ActivatedRoute,
    private readonly sampleFormService: SampleFormService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.sampleFormService.updateForm();
    this.formFields = this.sampleFormService.updateFormFields();

    this.item$ = this.route.paramMap.pipe(
      switchMap((param) => this.sampleService.getByKey(param.get('id'))),
      map((data) => data)
    );
  }

  control(name: string) {
    return this.formGroup.get(name) as FormControl;
  }

  field(name: keyof Sample) {
    return this.formFields[name];
  }

  update(formValue: Partial<Sample>, id: number) {
    this.sampleService.update({ id, ...formValue });
    this.formGroup.reset();
  }
}
