import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'aemat-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  formSubmitted = false;
  formSubmitLabel = 'Submit';

  fields: any[] = [
    {
      name: 'firstName',
      placeholder: 'Fist name',
      minLength: 10,
      required: true,
    },
    {
      name: 'age',
      placeholder: 'Fist name',
      minLength: 10,
      required: true,
    },
    {
      name: 'gender',
      placeholder: 'Fist name',
      minLength: 10,
      required: true,
    },
    {
      name: 'city',
      placeholder: 'City',
      inputType: 'select-one',
      minLength: 10,
      required: true,
    },
    {
      name: 'active',
      label: 'Active',
      inputType: 'switch',
    },
  ];

  formGroup = this.fb.group({});

  constructor(private readonly fb: FormBuilder) {}

  ngAfterViewInit(): void {
    console.log('');
  }

  ngOnInit(): void {
    for (const field of this.fields) {
      const validators = [
        field.required && Validators.required,
        field.minLength && Validators.minLength(field.minLength),
        field.maxLength && Validators.maxLength(field.maxLength),
        field.min && Validators.min(field.min),
        field.max && Validators.max(field.max),
        field.email && Validators.email(field.email),
      ].filter((e) => e);

      const formControl = new FormControl('', validators);

      this.formGroup.addControl(field.name, formControl);
    }
  }

  submit() {
    if (this.formGroup.dirty && !this.formGroup.invalid) {
      console.log(this.formGroup.value);
      this.formSubmitted = true;
      this.formSubmitLabel = 'Processing ... ';
    } else {
      console.log('Form is not valid');
    }
  }
}
