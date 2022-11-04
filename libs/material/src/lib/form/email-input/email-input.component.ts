import { Component } from '@angular/core';

import { BaseInputComponent } from '../shared-input';

@Component({
  selector: 'ae-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.scss'],
})
export class EmailInputComponent extends BaseInputComponent {}
