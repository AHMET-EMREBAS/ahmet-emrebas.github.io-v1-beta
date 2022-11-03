import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ae-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent implements AfterViewInit {
  @ViewChild('input') readonly input!: ElementRef<HTMLInputElement>;
  readonly control = new FormControl('');

  attributes: Partial<HTMLInputElement> = {
    placeholder: 'Type ...',
    maxLength: 10,
    required: true,
  };

  ngAfterViewInit(): void {}
}
