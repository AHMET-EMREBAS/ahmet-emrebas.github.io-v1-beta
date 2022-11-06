import { Component } from '@angular/core';

import { BaseInputComponent } from '../shared-input';

@Component({
  selector: 'ae-select-many-input',
  templateUrl: './select-many-input.component.html',
  styleUrls: ['./select-many-input.component.scss'],
})
export class SelectManyInputComponent extends BaseInputComponent {}
