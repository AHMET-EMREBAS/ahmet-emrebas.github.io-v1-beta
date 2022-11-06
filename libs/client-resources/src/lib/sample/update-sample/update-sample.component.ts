import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { HtmlInputOptions } from 'material/form/shared-input';
import {
  map,
  of,
  switchMap,
} from 'rxjs';

import { Sample } from '../sample.interface';
import { SampleService } from '../sample.service';

@Component({
  selector: 'ae-update-sample',
  templateUrl: './update-sample.component.html',
  styleUrls: ['./update-sample.component.scss'],
})
export class UpdateSampleComponent implements OnInit {
  item$ = this.route.paramMap.pipe(
    switchMap((param) => {
      return this.ss.getByKey(param.get('id'));
    }),
    map((data) => {
      return data;
    })
  );

  submitLabel = 'Update Sample';

  formGroup!: FormGroup;
  formFields!: Partial<Record<keyof Sample, HtmlInputOptions>>;

  constructor(
    private readonly ss: SampleService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl('', [
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
      cities: new FormControl('', []),
      price: new FormControl('', [Validators.min(1), Validators.max(90000000)]),
    });

    this.formFields = {
      name: {
        id: 'sample-name-input',
        minLength: 3,
        maxLength: 10,
        hint: '3-10 character long name.',
      },

      cities: {
        id: 'sample-city-input',
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
        currency: 'USD',
        min: '50',
        max: '9000000',
      },
    };
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
    this.ss.update({ id, ...(updateValue as any) });
  }

  field(name: keyof Sample) {
    return this.formFields[name];
  }
}
