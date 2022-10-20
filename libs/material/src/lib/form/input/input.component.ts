import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
} from '@angular/forms';

export interface InputOptions {
  name: string;
  inputType: string;

  minLength: number;
  maxLength: number;
  min: number;
  max: number;
  required: boolean;
  unique: boolean;
}

@Component({
  selector: 'ae-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() options: Partial<InputOptions> = { minLength: 0, maxLength: 2 };

  @Input() fc!: FormControl;
  @Input() fg!: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
