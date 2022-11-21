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

import { AuthService } from './auth.service';

@Component({
  selector: 'ae-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  readonly usernameInput = new FormControl(undefined, [
    Validators.required,
    Validators.email,
  ]);

  readonly passwordInput = new FormControl(undefined, [
    Validators.required,
    Validators.minLength(6),
  ]);

  readonly newPasswordInput = new FormControl(undefined, [
    Validators.required,
    Validators.minLength(6),
  ]);

  readonly securityCodeInput = new FormControl(undefined, [
    Validators.required,
    Validators.minLength(6),
  ]);

  serverResponse!: { message: string } | null;
  title = 'Create User';

  loginForm = new FormGroup({
    username: this.usernameInput,
    password: this.passwordInput,
  });

  resetPasswordForm = new FormGroup({
    username: this.usernameInput,
    newPassword: this.newPasswordInput,
    code: this.securityCodeInput,
  });

  constructor(
    private readonly systemMessageService: SystemMessageService,
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  async submitLoginForm() {
    const isLoginFormValid = this.loginForm.valid;
    const isLoginFormValue = this.loginForm.value;

    if (isLoginFormValid) {
      if (isLoginFormValue) {
        const { username, password } = isLoginFormValue;
        if (username && password) {
          this.loginUserAndNavigate(username, password);
        }
      }
    }
  }

  async loginUserAndNavigate(username: string, password: string) {
    const isLoggedIn = await this.authService.login(username, password);

    if (isLoggedIn) {
      this.router.navigate(['inventory'], { relativeTo: this.route });
    } else {
      this.serverResponse = { message: 'Could not login!' };
    }
  }

  async forgotPassword() {
    const isUsernameValid = this.usernameInput.valid;
    if (isUsernameValid) {
      const isUsernameHasValue = this.usernameInput.value;
      if (isUsernameHasValue) {
        this.serverResponse = await this.authService.requestResetPassworCode(
          isUsernameHasValue
        );
      }
    }
  }

  async submitResetPasswordForm() {
    const isResetPasswordFormValid = this.resetPasswordForm.valid;
    const isResetPasswordFormValue = this.resetPasswordForm.value;

    if (isResetPasswordFormValid) {
      const { username, code, newPassword } = isResetPasswordFormValue;
      if (username && code && newPassword) {
        await this.authService.resetPassword(username, code, newPassword);
      }
    }
  }
}
