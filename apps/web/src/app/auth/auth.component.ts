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

import { InputOptions } from 'material/form';
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

    permission: new FormControl(undefined, []),
  });

  fields: InputOptions[] = [
    {
      name: 'username',
      type: 'email',
      group: 'Username',
      placeholder: 'username',
      required: true,
      email: true,
    },

    {
      name: 'password',
      type: 'text',
      group: 'Password',
      placeholder: 'password',
      required: true,
      password: true,
    },
  ];

  constructor(
    private readonly systemMessageService: SystemMessageService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly httpClient: HttpClient
  ) {}

  async submit() {
    console.log('Submitting');
    if (this.submitted === false) {
      if (this.formGroup.valid) {
        console.log('Submitted');
        this.submitted = true;
        const authtoken = await firstValueFrom<{ accessToken: string }>(
          this.httpClient.post('api/auth/login', {
            username: this.value('username'),
            password: this.value('password'),
          }) as Observable<{ accessToken: string }>
        );

        if (authtoken.accessToken) {
          this.router.navigate(['inventory']);
        }

        console.log(authtoken.accessToken);

        document.cookie = 'authorization=' + authtoken.accessToken;

        console.log('cookies:', document.cookie);
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

  private value(key: string) {
    return this.formGroup.get(key)?.value;
  }
}
