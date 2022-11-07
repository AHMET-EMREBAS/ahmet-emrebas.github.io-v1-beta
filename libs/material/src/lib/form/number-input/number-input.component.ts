import { Component } from '@angular/core';

import { BaseInputComponent } from '../shared-input';

@Component({
  selector: 'ae-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss'],
})
export class NumberInputComponent extends BaseInputComponent {}
