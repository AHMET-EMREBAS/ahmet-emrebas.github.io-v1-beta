import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ae-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  submitLock = false;
  @Output() formSubmit = new EventEmitter();
  @Input() formGroup!: FormGroup;
  @Input() submitLabel = 'Submit';
  submit() {
    console.log(this.formGroup.value);
    if (this.formGroup.valid) {
      this.formSubmit.emit(this.formGroup.value);
      this.submitLock = true;

      setTimeout(() => {
        this.submitLock = false;
      }, 5000);
    }
  }
}
