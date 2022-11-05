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
      cities: new FormControl('', [Validators.required]),
    });

    this.formFields = {
      name: {
        id: 'sample-name-input',
        required: true,
        minLength: 3,
        maxLength: 10,
        hint: '3-10 character long name.',
      },

      cities: {
        id: 'city name',
        // required: true,
        options: [
          { id: 1, label: 'Yozgat' },
          { id: 2, label: 'Angara' },
          { id: 3, label: 'Suvas' },
          { id: 4, label: 'Girik Gale' },
        ],

        optionLabel: 'label',
        // selectionLimit: 1,
      },
    };
  }

  control(name: string) {
    return this.formGroup.get(name) as FormControl;
  }
}
