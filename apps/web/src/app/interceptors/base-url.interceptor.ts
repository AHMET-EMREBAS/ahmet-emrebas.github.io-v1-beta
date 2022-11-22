import {
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import {
  Inject,
  Injectable,
} from '@angular/core';

import { Observable } from 'rxjs';

import {
  AUTH_TOKEN_NAME,
  BASE_URL_TOKEN,
} from '../app.config';

@Injectable()
export class BaseUrlInterceptor {
  constructor(@Inject(BASE_URL_TOKEN) private baseUrl: string) {}

  private getAuthToken() {
    return (
      document.cookie
        .split(';')
        .map((e) => e.split('='))
        .find(([key, value]) => key === AUTH_TOKEN_NAME)?.[1] || ''
    );
  }

  private isUrlComplete(request: HttpRequest<any>) {
    return request.url.includes('://');
  }

  private isInternalApiRequest(request: HttpRequest<any>) {
    return request.url.includes('api');
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const tokenizedRequest = request.clone({
      setHeaders: {
        [AUTH_TOKEN_NAME]: this.getAuthToken() || '',
      },
    });

    const internalApiRequest = tokenizedRequest.clone({
      url: `${this.baseUrl}/${request.url}`,
    });

    if (this.isUrlComplete(request)) {
      return next.handle(tokenizedRequest);
    }

    if (this.isInternalApiRequest(request)) {
      return next.handle(internalApiRequest);
    }

    return next.handle(request);
  }
}
