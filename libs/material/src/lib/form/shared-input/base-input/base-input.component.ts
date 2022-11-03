import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { HtmlInputOptions } from '../html-input-element';

@Component({
  selector: 'ae-base-input',
  templateUrl: './base-input.component.html',
  styleUrls: ['./base-input.component.scss'],
})
export class BaseInputComponent implements OnInit {
  @ViewChild('input') readonly input!: ElementRef<HTMLInputElement>;
  @Input() control!: FormControl;
  @Input() attributes: HtmlInputOptions = {};

  ngOnInit(): void {
    if (!this.control) {
      this.control = new FormControl('');
    }
  }
}
