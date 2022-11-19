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
    this.password.nativeElement.oninput = (e: any) => {
      this.verifyPassword(e.target);
    };

    this.password.nativeElement.oninvalid = (e: any) => {
      this.verifyPassword(e.target);
    };
  }

  private verifyPassword(target: any) {
    const value = target.value;
    const lc = /[a-z]{1,}/;
    const uc = /[A-Z]{1,}/;
    const n = /[0-9]{1,}/;
    const c = /[~!@#$%^&*()_+{}:"<>?]{1,}/;
    this.m(target, '');

    if (!lc.test(value)) {
      this.m(target, 'Must contain a lowercase letter!');
      return;
    }
    if (!uc.test(value)) {
      this.m(target, 'Must contain an uppercase letter!');
      return;
    }
    if (!n.test(value)) {
      this.m(target, 'Must contain a number letter!');
      return;
    }
    if (!c.test(value)) {
      this.m(target, 'Must contain a special character!');
      return;
    }
  }

  private m(target: any, msg: string) {
    target.setCustomValidity(msg);
  }
}
