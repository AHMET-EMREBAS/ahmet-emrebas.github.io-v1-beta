import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  firstValueFrom,
  Observable,
} from 'rxjs';

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
    const serverResponse = await firstValueFrom<{ accessToken: string }>(
      this.httpClient.post('api/auth/login', {
        username,
        password,
      }) as Observable<{ accessToken: string }>
    );

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
    return await firstValueFrom(
      this.httpClient.post('api/auth/reset-password', {
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
    document.cookie = 'authorization=' + token;
  }
}
