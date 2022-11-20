import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

import { MessageService as SystemMessageService } from 'primeng/api';
import {
  firstValueFrom,
  Observable,
} from 'rxjs';

@Component({
  selector: 'ae-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  message = '';
  submitted = false;
  title = 'Create User';
  formGroup = new FormGroup({
    username: new FormControl(undefined, [
      Validators.required,
      Validators.email,
    ]),

    password: new FormControl(undefined, [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  forgotPasswordForm = new FormGroup({
    username: new FormControl(undefined, [
      Validators.required,
      Validators.email,
    ]),
  });

  loginWithCodeForm = new FormGroup({
    username: new FormControl(undefined, [
      Validators.required,
      Validators.email,
    ]),

    code: new FormControl(undefined, [Validators.required]),
  });

  constructor(
    private readonly systemMessageService: SystemMessageService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly httpClient: HttpClient
  ) {}

  async submit() {
    if (this.submitted === false) {
      if (this.formGroup.valid) {
        this.submitted = true;
        const authtoken = await firstValueFrom<{ accessToken: string }>(
          this.httpClient.post('api/auth/login', {
            username: this.value('username'),
            password: this.value('password'),
          }) as Observable<{ accessToken: string }>
        );

        this.setAuthCookie(authtoken.accessToken);
        if (authtoken.accessToken) {
          this.router.navigate(['inventory']);
        }
      } else {
        const e = Object.entries(this.formGroup.controls).filter(
          (e) => e[1].errors
        )[0];

        this.systemMessageService.add({
          severity: 'error',
          summary: `${e[0]} field is not valid!`,
        });
      }
    }
  }

  private setAuthCookie(token: string) {
    document.cookie = 'authorization=' + token;
  }

  async submitForgotPassword() {
    const message = await firstValueFrom<{ message: string }>(
      this.httpClient.post<{ message: string }>('api/auth/forgot-password', {
        username: this.forgotPasswordForm.controls.username.value,
      })
    );

    console.log(message);

    this.message = message.message;
  }

  async submitLoginWithCode() {
    const authtoken = await firstValueFrom<{
      accessToken: string;
      message?: string;
    }>(
      this.httpClient.post<{ accessToken: string }>(
        'api/auth/login-with-code',
        {
          username: this.loginWithCodeForm.controls.username.value,
          code: this.loginWithCodeForm.controls.code.value,
        }
      )
    );

    if (authtoken.accessToken) {
      this.setAuthCookie(authtoken.accessToken);
      this.router.navigate(['inventory']);
      return;
    }
    console.log(authtoken);
    this.message = authtoken.message + '';
  }

  private value(key: string) {
    return this.formGroup.get(key)?.value;
  }
}
