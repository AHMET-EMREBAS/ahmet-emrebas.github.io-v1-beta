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
  });

  fields: any[] = [
    {
      name: 'name',
      type: 'text',

      inputType: 'text',
      reqiured: true,
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
