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

  isTyping$!: Observable<boolean>;
  locked = false;
  showHint = false;

  ngAfterViewInit(): void {
    this.isTyping$ = merge(
      this.control.valueChanges.pipe(map((e) => true)),
      this.control.valueChanges.pipe(
        debounceTime(1000),
        map(() => false)
      )
    );

    setTimeout(() => {
      this.control.setValue('');
    }, 400);
  }

  isValid() {
    return this.control.dirty && this.control.valid;
  }

  isInvalid() {
    return this.control.dirty && this.control.invalid;
  }

  lockToggle() {
    const element = document.getElementById(
      this.attributes.id + ''
    ) as HTMLInputElement;

    if (this.locked) {
      this.locked = false;
      element.removeAttribute('disabled');
      return;
    }
    this.locked = true;
    element.disabled = true;
  }

  hintToggle() {
    this.showHint = !this.showHint;
  }

  hints() {
    return this.attributes.hint?.split('. ');
  }
}
