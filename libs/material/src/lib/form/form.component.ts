import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import {
  Observable,
  of,
} from 'rxjs';

type IoExtra<T> = {
  options: T[];
  asyncOptions: Observable<T[]>;
  optionLabel: string;
  optionValue: string;
  min: number;
  max: number;
  password: boolean;
  email: boolean;
  group: string;
};

type IoRequired = {
  type: string;
  name: string;
};
type IoAttr = Omit<HTMLInputElement, 'min' | 'max'>;

type R = Record<string, any>;

export type InputOptions<T = R> = Partial<IoAttr & IoExtra<T>> & IoRequired;
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
    console.log('[Form Component] submitting');

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

  getOptions(name: string) {
    const found = this.fields.find((e) => e.name === name);
    return found?.options ? of(found.options) : found?.asyncOptions;
  }

  fieldType(fType: string) {
    if (!fType) {
      throw new Error('Input type is required!');
    }

    if (fType === 'number') return 'text';

    return fType;
  }

  getFirstError(fieldName: string) {
    return Object.entries(this.formGroup.get(fieldName)?.errors || {})[0];
  }
}
