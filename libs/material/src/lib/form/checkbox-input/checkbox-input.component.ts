import { Component } from '@angular/core';

import { BaseInputComponent } from '../shared-input';

@Component({
  selector: 'ae-checkbox-input',
  templateUrl: './checkbox-input.component.html',
  styleUrls: ['./checkbox-input.component.scss'],
})
export class CheckboxInputComponent extends BaseInputComponent {}
