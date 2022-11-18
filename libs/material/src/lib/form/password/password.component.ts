import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ae-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent implements AfterViewInit {
  @ViewChild('password') password!: ElementRef<HTMLInputElement>;
  @Input() formGroup!: FormGroup;

  ngAfterViewInit(): void {
    const lc = /[a-z]{1,}/;
    const uc = /[A-Z]{1,}/;
    const n = /[0-9]{1,}/;
    const c = /[~!@#$%^&*()_+-=]{1,}/;

    this.password.nativeElement.setCustomValidity('');

    this.password.nativeElement.oninput = (e: any) => {
      e.target.setCustomValidity('');
      console.log(e.target.value);
      const value = e.target.value;
      const target = e.target;
      console.log(value);
      console.log(c.test(value));

      if (!lc.test(value)) this.m(target, 'Must contain a lowercase letter!');
      if (!uc.test(value)) this.m(target, 'Must contain an uppercase letter!');
      if (!n.test(value)) this.m(target, 'Must contain a number letter!');
      if (!c.test(value)) this.m(target, 'Must contain a special character!');
    };
  }

  private m(target: any, msg: string) {
    target.setCustomValidity(msg);
  }
}
