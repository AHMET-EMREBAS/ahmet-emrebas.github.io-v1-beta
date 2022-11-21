import { CdkStepper } from '@angular/cdk/stepper';
import {
  AfterViewInit,
  Component,
  ViewChild,
} from '@angular/core';
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
export class AuthComponent implements AfterViewInit {
  @ViewChild('stepper') stepper!: CdkStepper;
  readonly usernameInput = new FormControl('aemrebas.dev@gmail.com', [
    Validators.required,
    Validators.email,
  ]);

  readonly passwordInput = new FormControl('!1Pass', [
    Validators.required,
    Validators.minLength(6),
  ]);

  readonly newPasswordInput = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);

  readonly securityCodeInput = new FormControl('', [
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

  ngAfterViewInit(): void {
    const params = this.route.snapshot.queryParamMap;
    const code = params.get('code');
    const username = params.get('username');

    if (code) {
      this.resetPasswordForm.controls.code.setValue(code);
      if (username) {
        this.resetPasswordForm.controls.username.setValue(username);
      }
      this.stepper.next();
    }
  }

  async submitLoginForm() {
    console.log(this.loginForm.value);
    const isLoginFormValid = this.loginForm.valid;
    const isLoginFormValue = this.loginForm.value;
    if (isLoginFormValid) {
      if (isLoginFormValue) {
        const { username, password } = isLoginFormValue;
        if (username && password) {
          await this.loginUserAndNavigate(username, password);
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
        this.serverResponse = await this.authService.resetPassword(
          username,
          code,
          newPassword
        );

        if (this.serverResponse) {
          await this.loginUserAndNavigate(username, newPassword);
        }
      }
    }
  }
}
