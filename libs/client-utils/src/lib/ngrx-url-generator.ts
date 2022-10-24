import { Inject } from '@nestjs/common';
import {
  DefaultHttpUrlGenerator,
  Pluralizer,
} from '@ngrx/data';

import { AuthTokenManager } from './auth-token-manager';

export class NgrxUrlGenerator extends DefaultHttpUrlGenerator {
  constructor(
    @Inject('AuthTokenManager')
    private readonly tokenManager: AuthTokenManager,

    @Inject('AuthTokenKey') private readonly authTokenKey: string,
    plural: Pluralizer
  ) {
    super(plural);
  }
  override entityResource(
    entityName: string,
    root: string,
    trailingSlashEndpoints: boolean
  ): string {
    return (
      super.entityResource(entityName, root, trailingSlashEndpoints) +
      `?${this.authTokenKey}=` +
      this.tokenManager.getToken(this.authTokenKey)
    );
  }

  override collectionResource(entityName: string, root: string): string {
    return (
      super.collectionResource(entityName, root) +
      `?${this.authTokenKey}=` +
      this.tokenManager.getToken(this.authTokenKey)
    );
  }
}
