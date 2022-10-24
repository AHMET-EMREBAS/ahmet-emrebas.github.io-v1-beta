import { DefaultHttpUrlGenerator } from '@ngrx/data';

export function getAuthTokenFromCookies(tokenKey: string = 'auth') {
  return (document.cookie
    .split(';')
    .map((e) => e.split('='))
    .find((e) => e[0] === tokenKey) || [])[1];
}

export class MyURLGenerator extends DefaultHttpUrlGenerator {
  override entityResource(
    entityName: string,
    root: string,
    trailingSlashEndpoints: boolean
  ): string {
    return (
      super.entityResource(entityName, root, trailingSlashEndpoints) +
      '?auth=' +
      getAuthTokenFromCookies()
    );
  }

  override collectionResource(entityName: string, root: string): string {
    return (
      super.collectionResource(entityName, root) +
      '?auth=' +
      getAuthTokenFromCookies()
    );
  }
}
