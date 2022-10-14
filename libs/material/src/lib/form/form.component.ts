import { Component } from '@angular/core';

export interface FormField {}

export interface FormOptions {
  fields: FormField;
}

@Component({
  selector: 'aemat-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {}
