import { DefaultHttpUrlGenerator } from '@ngrx/data';

function authCookie() {
  console.log(
    (document.cookie
      .split(';')
      .map((e) => e.split('='))
      .find((e) => e[0] === 'auth') || [])[1]
  );

  return (document.cookie
    .split(';')
    .map((e) => e.split('='))
    .find((e) => e[0] === 'auth') || [])[1];
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
      authCookie()
    );
  }

  override collectionResource(entityName: string, root: string): string {
    return super.collectionResource(entityName, root) + '?auth=' + authCookie();
  }
}
