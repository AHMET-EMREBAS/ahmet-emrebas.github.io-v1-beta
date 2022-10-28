import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ae-resource-manager',
  templateUrl: './resource-manager.component.html',
  styleUrls: ['./resource-manager.component.scss'],
})
export class ResourceManagerComponent {
  data = [
    { id: 1, name: 'some' },
    { id: 2, name: 'some1' },
    { id: 3, name: 'some2' },
    { id: 4, name: 'some3' },
    { id: 5, name: 'some4' },
  ];

  fields = [
    {
      placeholder: 'Name',
      name: 'name',
      type: 'text',
      required: true,
      minlength: 3,
      maxlength: 10,
    },
    {
      placeholder: 'Age',
      name: 'age',
      type: 'number',
      required: true,
      min: '18',
      max: '100',
    },
    {
      name: 'gender',
      type: 'radio',
      required: true,
      enums: ['Male', 'Female'],
    },
    { placeholder: 'Active', name: 'active', type: 'checkbox', required: true },
    {
      placeholder: 'Select city',
      name: 'city',
      type: 'select',
      enums: ['A', 'B', 'C', 200],
      required: true,
    },
  ];
  constructor(private readonly fb: FormBuilder) {}

  save(formData: any) {
    console.log(formData);
  }
}
