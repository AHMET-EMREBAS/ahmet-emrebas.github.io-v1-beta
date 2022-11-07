import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import {
  Observable,
  of,
} from 'rxjs';

import { InputAttributes } from '../html-input-element';

@Component({
  selector: 'ae-base-input',
  templateUrl: './base-input.component.html',
  styleUrls: ['./base-input.component.scss'],
})
export class BaseInputComponent implements AfterViewInit {
  @ViewChild('input') readonly input!: ElementRef<HTMLInputElement>;
  @Input() control!: FormControl;
  @Input() attributes: InputAttributes = {};

  @Output() updateEvent = new EventEmitter<Record<string, any>>();
  @Input() updateField!: boolean;
  @Input() defaultValue: any;

  disabled = false;
  disabledToggle(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
  ngAfterViewInit(): void {
    if (this.defaultValue) {
      this.control.setValue(this.defaultValue);
    }
  }

  getOptions(): Observable<Record<string, any>[]> {
    if (this.attributes) {
      if (this.attributes.options) {
        return of(this.attributes.options);
      } else if (this.attributes.asyncOptions) {
        return this.attributes.asyncOptions;
      }
      throw new Error('Options/AsyncOptions must be provided');
    } else {
      throw new Error('Attributes required!');
    }
  }
}
