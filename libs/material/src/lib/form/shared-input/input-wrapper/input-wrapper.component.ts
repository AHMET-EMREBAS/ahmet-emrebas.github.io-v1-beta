import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  Validators,
} from '@angular/forms';

import {
  debounceTime,
  map,
  merge,
  Observable,
} from 'rxjs';

@Component({
  selector: 'ae-input-wrapper',
  templateUrl: './input-wrapper.component.html',
  styleUrls: ['./input-wrapper.component.scss'],
})
export class InputWrapperComponent implements OnInit, AfterViewInit {
  isTyping$!: Observable<boolean>;
  @Input() control!: FormControl;

  constructor() {}
  ngAfterViewInit(): void {
    this.control.addValidators(Validators.required);
    this.isTyping$ = merge(
      this.control.valueChanges.pipe(map((e) => true)),
      this.control.valueChanges.pipe(
        debounceTime(1000),
        map((e) => false)
      )
    );
  }

  ngOnInit(): void {}
}
