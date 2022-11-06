import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { HtmlInputOptions } from '../html-input-element';

@Component({
  selector: 'ae-base-input',
  templateUrl: './base-input.component.html',
  styleUrls: ['./base-input.component.scss'],
})
export class BaseInputComponent implements AfterViewInit {
  @ViewChild('input') readonly input!: ElementRef<HTMLInputElement>;
  @Input() control!: FormControl;
  @Input() attributes: HtmlInputOptions = {};

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
}
