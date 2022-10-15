import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'aemat-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  formSubmitted = false;
  formSubmitLabel = 'Submit';

  formValue = {};

  fields = [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
    },
  ];
  formGroup = new FormGroup({
    name: new FormControl('', Validators.minLength(3)),
    description: new FormControl('', Validators.maxLength(100)),
  });

  controller(name: string) {
    return this.formGroup.controls[name];
  }

  submit() {
    if (this.formGroup.dirty && this.formGroup.valid) {
      console.log(this.formGroup.value);
      this.formSubmitted = true;
      this.formSubmitLabel = 'Processing ... ';
    } else {
      console.log('Form is not valid');
    }
  }
}
