import { Component } from '@angular/core';

import { BaseInputComponent } from '../shared-input';

@Component({
  selector: 'ae-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent extends BaseInputComponent {}
