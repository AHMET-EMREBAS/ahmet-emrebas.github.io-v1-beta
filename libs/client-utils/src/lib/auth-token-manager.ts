/**
 * Manage application tokens.
 */
export interface AuthTokenManager {
  getToken(name: string): string;
  setToken(name: string, value: string): void;
}
/**
 * Manage token with Cookies.
 */
export class AuthCookieTokenManager implements AuthTokenManager {
  getToken(key: string): string {
    return (document.cookie
      .split(';')
      .map((e) => e.split('='))
      .find((e) => e[0] === key) || [])[1];
  }

  setToken(name: string, value: string): void {
    document.cookie += `${name}=${value};`;
  }
}
