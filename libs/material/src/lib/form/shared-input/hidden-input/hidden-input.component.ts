import {
  Component,
  Input,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { InputAttributes } from '../html-input-element';

@Component({
  selector: 'ae-hidden-input',
  templateUrl: './hidden-input.component.html',
  styleUrls: ['./hidden-input.component.scss'],
})
export class HiddenInputComponent {
  @Input() attributes!: InputAttributes;
  @Input() control!: FormControl;

  getType() {
    if (this.attributes.minLength || this.attributes.maxLength) {
      return 'text';
    }

    if (this.attributes.min || this.attributes.max) {
      return 'number';
    }

    if (this.attributes.before || this.attributes.after) {
      return 'date';
    }

    return 'text';
  }
}
