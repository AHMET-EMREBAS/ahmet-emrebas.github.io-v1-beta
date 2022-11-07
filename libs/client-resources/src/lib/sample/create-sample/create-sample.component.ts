import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
} from '@angular/forms';

import { FormManager } from 'material/form/form-builder';
import { InputAttributes } from 'material/form/shared-input';

import { SampleFormService } from '../sample-form.service';
import { Sample } from '../sample.interface';
import { SampleService } from '../sample.service';

@Component({
  selector: 'ae-create-sample',
  templateUrl: './create-sample.component.html',
  styleUrls: ['./create-sample.component.scss'],
})
export class CreateSampleComponent implements OnInit {
  @Input() submitLabel = 'Save Sample';
  @Input() defaultValue!: any;

  formGroup!: FormGroup;
  formFields!: Partial<Record<keyof Sample, InputAttributes>>;

  constructor(
    private readonly sampleService: SampleService,
    private readonly sampleFormService: SampleFormService
  ) {}

  formBuilder!: FormManager<Sample>;

  ngOnInit(): void {
    this.formGroup = this.sampleFormService.createForm();
    this.formFields = this.sampleFormService.createFormFields();
  }

  control(name: string) {
    return this.formGroup.get(name) as FormControl;
  }

  onSubmit(formValue: Sample) {
    this.sampleService.add({ ...formValue });
  }

  field(name: keyof Sample) {
    return this.formFields[name];
  }
}
