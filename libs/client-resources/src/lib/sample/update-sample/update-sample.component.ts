import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { InputAttributes } from 'material/form/shared-input';
import {
  map,
  switchMap,
} from 'rxjs';

import { SampleFormService } from '../sample-form.service';
import { Sample } from '../sample.interface';
import { SampleService } from '../sample.service';

@Component({
  selector: 'ae-update-sample',
  templateUrl: './update-sample.component.html',
  styleUrls: ['./update-sample.component.scss'],
})
export class UpdateSampleComponent implements OnInit {
  item$ = this.route.paramMap.pipe(
    switchMap((param) => this.sampleService.getByKey(param.get('id'))),
    map((data) => data)
  );

  submitLabel = 'Update Sample';
  formGroup!: FormGroup;
  formFields!: Partial<Record<keyof Sample, InputAttributes>>;

  constructor(
    private readonly sampleService: SampleService,
    private readonly route: ActivatedRoute,
    private readonly sampleFormService: SampleFormService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.sampleFormService.createForm();
    this.formFields = this.sampleFormService.createFormFields();
  }

  control(name: string) {
    return this.formGroup.get(name) as FormControl;
  }

  onSubmit(formValue: Sample, id: number) {
    const updateValue: any = {};

    const controls = Object.entries(this.formGroup.controls);

    for (const [name, c] of controls) {
      if (c.dirty) {
        updateValue[name] = c.value;
      }
    }
    console.log(updateValue);
    this.sampleService.update({ id, ...(updateValue as any) });
  }

  field(name: keyof Sample) {
    return this.formFields[name];
  }

  update(formValue: Partial<Sample>, id: number) {
    this.sampleService.update({ id, ...formValue });
  }
}
