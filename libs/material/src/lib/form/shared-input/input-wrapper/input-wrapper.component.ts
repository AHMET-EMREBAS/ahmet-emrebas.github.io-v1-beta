import {
  AfterViewInit,
  Component,
  Input,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { bounceInOnEnterAnimation } from 'angular-animations';
import {
  debounceTime,
  map,
  merge,
  Observable,
} from 'rxjs';

import { HtmlInputOptions } from '../html-input-element';

@Component({
  selector: 'ae-input-wrapper',
  templateUrl: './input-wrapper.component.html',
  styleUrls: ['./input-wrapper.component.scss'],
  animations: [bounceInOnEnterAnimation({ anchor: 'enter' })],
})
export class InputWrapperComponent implements AfterViewInit {
  @Input() control!: FormControl;
  @Input() attributes!: HtmlInputOptions;

  disabled = false;

  isTyping$!: Observable<boolean>;

  ngAfterViewInit(): void {
    this.isTyping$ = merge(
      this.control.valueChanges.pipe(map((e) => true)),
      this.control.valueChanges.pipe(
        debounceTime(1000),
        map(() => false)
      ),
      this.control.valueChanges.pipe(
        debounceTime(3000),
        map(() => {
          if (
            this.control.valid &&
            this.control.dirty &&
            this.control.touched
          ) {
            this.disabled = true;
          }
          return false;
        })
      )
    );
  }

  isValid() {
    return this.control.dirty && this.control.valid;
  }

  isInvalid() {
    return this.control.dirty && this.control.invalid;
  }

  toggleDisable() {
    this.disabled = !this.disabled;
  }

  disableInput() {
    this.disabled = true;
  }

  enableInput() {
    this.disabled = false;

    setTimeout(() => {
      const element = document.querySelector(
        `#${this.attributes.id}`
      ) as HTMLInputElement;

      const element2 = document.querySelector(
        `#${this.attributes.id} input`
      ) as HTMLInputElement;

      if (element?.focus) {
        element.focus();
      }

      if (element2?.focus) {
        element2.focus();
      }
    }, 200);
  }

  getTextValue() {
    if (
      ['string', 'number', 'boolean', 'date'].includes(
        typeof this.control.value
      )
    ) {
      return this.control.value;
    } else if (typeof this.control.value.map === 'function') {
      return this.control.value.map((e: any) => {
        if (this.attributes.optionLabel) {
          return e[this.attributes.optionLabel];
        } else {
          return e.id;
        }
      });
    }
  }
}
