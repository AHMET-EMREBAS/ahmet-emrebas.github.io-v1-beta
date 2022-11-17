import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import {
  map,
  Observable,
  of,
} from 'rxjs';

export type InputOptions<T = Record<string, any>> = Partial<
  Omit<HTMLInputElement, 'min' | 'max'> & {
    options: T[];
    asyncOptions: Observable<T[]>;
    optionLabel: string;
    optionValue: string;
    min: number;
    max: number;
    password: boolean;
    email: boolean;
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

    const common: any = {};
    if (found?.optionLabel) {
      common[found.optionLabel] = `Select ${found.name}`;
    } else if (found?.name) {
      common[found.name] = `Select ${found.name}`;
    }

    if (found?.options) {
      return of([common, ...found.options]);
    }

    return found?.asyncOptions?.pipe(
      map((data) => {
        return [common, ...data];
      })
    );
  }

  fieldType(fType: string | undefined) {
    if (!fType) {
      return 'text';
    }
    if (fType === 'number') {
      return 'text';
    }

    return fType;
  }
}
