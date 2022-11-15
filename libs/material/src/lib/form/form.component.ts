import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Observable } from 'rxjs';

export type InputOptions<T = Record<string, any>> = Partial<
  HTMLInputElement & {
    options: T[];
    asyncOptions: Observable<T[]>;
    optionLabel: string;
    optionValue: string;
  }
>;
@Component({
  selector: 'ae-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Input() formGroup!: FormGroup;
  @Input() fields!: InputOptions[];

  @Output() submitEvent = new EventEmitter();

  submit() {
    this.submitEvent.emit();
  }
}
