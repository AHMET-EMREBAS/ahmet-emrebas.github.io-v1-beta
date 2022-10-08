import { HttpClient } from '@angular/common/http';
import {
  Inject,
  Injectable,
} from '@angular/core';

import { Observable } from 'rxjs';

export const BASE_HTTP_CLIENT_PATH = 'BASE_HTTP_CLIENT_PATH';

@Injectable()
export class HttpClientService {
  constructor(
    public readonly httpClient: HttpClient,
    @Inject(BASE_HTTP_CLIENT_PATH) public readonly basePath: string
  ) {}

  private resolvePath(httpPath: string) {
    return [this.basePath, httpPath].join('/');
  }
  get<R = any>(httpPath: string): Observable<R> {
    return this.httpClient.get<R>(this.resolvePath(httpPath));
  }

  post<R = any>(httpPath: string, body: any): Observable<R> {
    return this.httpClient.post<R>(this.resolvePath(httpPath), body);
  }

  put<R = any>(httpPath: string, body: any): Observable<R> {
    return this.httpClient.put<R>(this.resolvePath(httpPath), body);
  }

  delete<R = any>(httpPath: string): Observable<R> {
    return this.httpClient.delete<R>(this.resolvePath(httpPath));
  }
}
