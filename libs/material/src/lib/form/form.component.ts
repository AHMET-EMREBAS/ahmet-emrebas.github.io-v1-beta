import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Observable } from 'rxjs';

export type InputOptions<T = Record<string, any>> = Partial<
  Omit<HTMLInputElement, 'min' | 'max'> & {
    options: T[];
    asyncOptions: Observable<T[]>;
    optionLabel: string;
    optionValue: string;
    min: number;
    max: number;
  }
>;
@Component({
  selector: 'ae-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements AfterViewInit {
  @Input() formGroup!: FormGroup;
  @Input() fields!: InputOptions[];

  @Output() submitEvent = new EventEmitter();

  submit() {
    this.submitEvent.emit();
  }
  ngAfterViewInit(): void {
    const element = document.querySelector(
      '.ae-form input'
    ) as HTMLInputElement;

    if (element) {
      element.focus();
    }
  }
}
