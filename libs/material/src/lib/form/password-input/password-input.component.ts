import { Component } from '@angular/core';

import { BaseInputComponent } from '../shared-input';

@Component({
  selector: 'ae-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
})
export class PasswordInputComponent extends BaseInputComponent {}
