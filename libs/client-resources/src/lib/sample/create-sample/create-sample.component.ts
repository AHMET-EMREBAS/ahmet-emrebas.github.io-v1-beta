import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import {
  BaseResourceFormComponent,
} from 'material/form/base-resource-form-component';

import { Sample } from '../sample.interface';
import { SampleService } from '../sample.service';

@Component({
  selector: 'ae-create-sample',
  templateUrl: './create-sample.component.html',
  styleUrls: ['./create-sample.component.scss'],
})
export class CreateSampleComponent
  extends BaseResourceFormComponent<Sample>
  implements OnInit
{
  constructor(service: SampleService) {
    super(service);
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
    });

    this.formFields = {
      name: {
        id: 'sample-name-input',
        required: true,
        minLength: 3,
        maxLength: 10,
        hint: 'At least 3 characters long. At most 10 characters long. Required!',
      },
    };
  }

  control(name: string) {
    return this.formGroup.get(name) as FormControl;
  }
}
