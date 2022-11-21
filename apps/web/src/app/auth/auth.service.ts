import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { firstValueFrom } from 'rxjs';

import { AUTH_TOKEN_NAME } from '../app.config';

@Injectable()
export class AuthService {
  constructor(private readonly httpClient: HttpClient) {}

  /**
   * Login and set user cookies
   * @param username
   * @param password
   * @returns
   */
  async login(username: string, password: string): Promise<boolean> {
    const serverResponse = await firstValueFrom<any>(
      this.httpClient.post('api/auth/login', {
        username,
        password,
      })
    ).catch((err) => {
      console.log(err);
      return { accessToken: null };
    });

    if (serverResponse?.accessToken) {
      this.setAuthCookie(serverResponse.accessToken);
      return true;
    }
    return false;
  }

  /**
   * Request a security code for resettting password
   * @param username
   * @returns
   */
  async requestResetPassworCode(username: string) {
    return await firstValueFrom<{ message: string }>(
      this.httpClient.post<{ message: string }>('api/auth/forgot-password', {
        username,
      })
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
    return await firstValueFrom<{ message: string }>(
      this.httpClient.post<{ message: string }>('api/auth/reset-password', {
        username,
        code,
        newPassword,
      })
    );
  }

  /**
   * Set authentication cookie
   * @param token
   */
  private setAuthCookie(token: string) {
    document.cookie = `${AUTH_TOKEN_NAME}=` + token;
    if ((window as any)['electron']) {
      (window as any)['electron'].setCookie(AUTH_TOKEN_NAME, token);
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
