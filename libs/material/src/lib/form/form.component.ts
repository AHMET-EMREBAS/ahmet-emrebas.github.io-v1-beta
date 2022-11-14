import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

export type InputOptions = Partial<
  HTMLInputElement & { options: { id: number; label: string }[] }
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
    this.submitEvent.emit({});
  }
}
