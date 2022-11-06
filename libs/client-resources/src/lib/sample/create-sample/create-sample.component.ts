import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { HtmlInputOptions } from 'material/form/shared-input';
import { of } from 'rxjs';

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
  formFields!: { [key: string]: HtmlInputOptions };

  constructor(private readonly ss: SampleService) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
      cities: new FormControl('', [Validators.required]),
      price: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(90000000),
      ]),
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
        id: 'sample-city-input',
        required: true,

        options: of([
          { id: 1, label: 'Yozgat' },
          { id: 2, label: 'Angara' },
          { id: 3, label: 'Suvas' },
          { id: 4, label: 'Girik Gale' },
        ]),

        optionLabel: 'label',
      },

      price: {
        id: 'sample-price',
        label: 'Set price',
        required: true,
        currency: 'USD',
        min: '50',
        max: '9000000',
      },
    };
  }

  control(name: string) {
    return this.formGroup.get(name) as FormControl;
  }

  onSubmit(formValue: Sample) {
    this.ss.add({ ...formValue });
  }

  field(name: keyof Sample) {
    return this.formFields[name];
  }
}
