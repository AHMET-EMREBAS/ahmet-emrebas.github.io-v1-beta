import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'ae-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() fields!: Partial<
    HTMLInputElement & { enums?: (string | number | boolean)[] }
  >[];
  @Input() formGroup!: FormGroup;

  @Output() submitEvent = new EventEmitter<Record<string, any>>();

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    if (!this.formGroup) {
      const fg = new FormGroup({});
      for (const field of this.fields) {
        if (!field.name) {
          throw new Error('Field name must be provided!');
        }
        const control = new FormControl('');

        if (field.minLength)
          control.addValidators(Validators.minLength(field.minLength));

        if (field.maxLength)
          control.addValidators(Validators.maxLength(field.maxLength));

        if (field.min) control.addValidators(Validators.min(~~field.min));

        if (field.max) control.addValidators(Validators.max(~~field.max));

        if (field.required) control.addValidators(Validators.required);

        fg.addControl(field.name, control);
      }

      this.formGroup = fg;
    }
  }

  submit() {
    this.submitEvent.emit(this.formGroup.value);
  }
}
