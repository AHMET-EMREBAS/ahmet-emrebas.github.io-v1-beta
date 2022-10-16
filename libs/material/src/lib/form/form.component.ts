import {
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'aemat-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit, AfterViewInit {
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
      name: 'lastName',
      placeholder: 'Last Name',
      minLength: 10,
      required: true,
      password: true,
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
    // const op1 = (e: any) =>
    //   Object.entries(e).filter(([key, value]) => (Validators as any)[key]);
    // const op = this.fields.map((e) => ({
    //   [e.name]: ['', op1(e)],
    // }));
    // this.formGroup = this.fb.group(op);
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
