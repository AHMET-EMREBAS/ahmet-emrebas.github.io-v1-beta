import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { ResourceService } from '../resource.service';

@Component({
  selector: 'aemat-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  isFormSubmitted = false;

  formGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    colors: new FormControl(null, Validators.required),
    cities: new FormControl(null, Validators.required),
    category: new FormControl(null, Validators.required),
  });

  fields: any[] = [
    {
      name: 'name',
      type: 'text',
      inputType: 'text',
      reqiured: true,
    },

    {
      name: 'colors',
      type: 'text',
      inputType: 'select-one-enum',
      multiple: true,
      options: ['Red', 'Blue', 'Orange', 'Gray', 'Black'],
    },
    {
      name: 'cities',
      type: 'text',
      inputType: 'select-many-enum',
      multiple: true,
      options: ['Red', 'Blue', 'Orange', 'Gray', 'Black'],
    },
    {
      name: 'category',
      type: 'number',
      inputType: 'select-one-object',
      options: [
        { id: 1, label: 'Cat 1' },
        { id: 2, label: 'Cat 2' },
      ],
    },
  ];

  constructor(private readonly resourceService: ResourceService) {}

  submit() {
    if (this.formGroup.dirty && this.formGroup.valid) {
      this.resourceService.save(this.formGroup.value);
      this.isFormSubmitted = true;
    }
  }
}
