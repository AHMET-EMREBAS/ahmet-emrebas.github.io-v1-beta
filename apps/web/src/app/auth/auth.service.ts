import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  firstValueFrom,
  lastValueFrom,
  take,
} from 'rxjs';

import { AUTH_TOKEN_NAME } from '../app.config';

@Injectable()
export class AuthService {
  static authtokens = new Map();
  constructor(private readonly httpClient: HttpClient) {}

  /**
   * Login and set user cookies
   * @param username
   * @param password
   * @returns
   */
  async login(username: string, password: string): Promise<boolean> {
    const result = await lastValueFrom(
      this.httpClient.post<{ accessToken: string }>('api/auth/login', {
        username,
        password,
      }),
      { defaultValue: { accessToken: null } }
    );

    if (result.accessToken) {
      this.setAuthCookie(result.accessToken);
    }
    return !!result.accessToken;
  }

  /**
   * Request a security code for resettting password
   * @param username
   * @returns
   */
  async requestResetPassworCode(username: string) {
    return await firstValueFrom(
      this.httpClient.post<{ message: string }>('api/auth/forgot-password', {
        username,
      }),
      { defaultValue: null }
    );
  }

  /**
   * Reset user password
   * @param username username
   * @param code security code
   * @param newPassword new password
   * @http /api/auth/reset-password
   */
  async resetPassword(username: string, code: string, newPassword: string) {
    return await firstValueFrom(
      this.httpClient
        .post<{ message: string }>('api/auth/reset-password', {
          username,
          code,
          newPassword,
        })
        .pipe(take(2)),
      { defaultValue: null }
    );
  }

  /**
   * Set authentication cookie
   * @param token
   */
  private setAuthCookie(token: string) {
    AuthService.authtokens.set(AUTH_TOKEN_NAME, token);
    try {
      document.cookie = `${AUTH_TOKEN_NAME}=` + token + `; path=/`;
    } catch (err) {
      // ignore
    }
  }

  async canActivate(permission: string | undefined | null) {
    if (!permission) {
      return true;
    }
    try {
      return (
        await firstValueFrom<{ canActivate: boolean }>(
          this.httpClient.post<{ canActivate: boolean }>(
            `api/auth/has-permission/?permission=${permission}`,
            {}
          )
        )
      ).canActivate;
    } catch (err) {
      return false;
    }
  }

  async isLogin() {
    try {
      return (
        await firstValueFrom(
          this.httpClient.post<{ isLogin: boolean }>('api/auth/is-login', {})
        )
      ).isLogin;
    } catch (err) {
      return false;
    }
  }
}
