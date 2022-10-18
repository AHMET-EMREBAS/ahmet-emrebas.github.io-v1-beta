import {
  Component,
  Input,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { getErrorMessage } from '../input-control';

@Component({
  selector: 'aemat-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
})
export class FormInputComponent {
  @Input() group!: FormGroup;
  @Input() attributes!: Record<string, any>;
  @Input() label!: string;
  @Input() controlName!: string;

  errorMessage(property: string) {
    if (this.group) {
      return getErrorMessage(this.group.controls[property].errors || {});
    }
  }
}
