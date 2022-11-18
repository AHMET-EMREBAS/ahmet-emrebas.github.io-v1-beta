import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { InputOptions } from '../form.component';

@Component({
  selector: 'ae-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent implements AfterViewInit {
  viewPassword = false;

  @ViewChild('password') password!: ElementRef<HTMLInputElement>;
  @Input() formGroup!: FormGroup;
  @Input() field!: InputOptions;

  ngAfterViewInit(): void {
    const lc = /[a-z]{1,}/;
    const uc = /[A-Z]{1,}/;
    const n = /[0-9]{1,}/;
    const c = /[~!@#$%^&*()_+-=]{1,}/;

    this.password.nativeElement.setCustomValidity('');

    this.password.nativeElement.oninput = (e: any) => {
      e.target.setCustomValidity('');
      const value = e.target.value;
      const target = e.target;

      if (!lc.test(value)) this.m(target, 'Must contain a lowercase letter!');
      if (!uc.test(value)) this.m(target, 'Must contain an uppercase letter!');
      if (!n.test(value)) this.m(target, 'Must contain a number letter!');
      if (!c.test(value)) this.m(target, 'Must contain a special character!');
    };

    this.password.nativeElement.oninvalid = (e: any) => {
      if (this.field?.required) {
        this.m(e.target, '');
        if (!e.target.validity.valid) this.m(e.target, 'Password is required!');
      }
    };
  }

  private m(target: any, msg: string) {
    target.setCustomValidity(msg);
  }
}
