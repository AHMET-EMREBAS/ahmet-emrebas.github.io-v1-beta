import {
  Inject,
  Injectable,
} from '@angular/core';

import {
  DefaultHttpUrlGenerator,
  Pluralizer,
} from '@ngrx/data';

import { BASE_URL_TOKEN } from '../app.config';

@Injectable()
export class NgrxURLInterceptor extends DefaultHttpUrlGenerator {
  constructor(
    @Inject(BASE_URL_TOKEN) public readonly baseURL: string,
    private pluralizer0: Pluralizer
  ) {
    super(pluralizer0);
  }

  override entityResource(entityName: string): string {
    return this.toUrl(entityName);
  }

  override collectionResource(entityName: string, root: string): string {
    return this.toUrl(entityName);
  }

  private toUrl(entityName: string) {
    return [this.baseURL, 'api', entityName.toLowerCase()].join('/') + '/';
  }
}
