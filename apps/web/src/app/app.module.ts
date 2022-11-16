import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import {
  Inject,
  Injectable,
  NgModule,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  PreloadAllModules,
  RouterModule,
  Routes,
} from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { LayoutModule } from 'layout';
import { Observable } from 'rxjs';

import {
  DefaultHttpUrlGenerator,
  DefaultPluralizer,
  EntityDataModule,
  HttpUrlGenerator,
} from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { entityDataModuleConfig } from './app.ngrx';

DefaultPluralizer;
const BASE_API_URL = 'BASE_API_URL';
const BASE_URL_VALUE = 'http://localhost:3333';

@Injectable()
export class NgrxHttpUrlGenerator extends DefaultHttpUrlGenerator {
  constructor(@Inject(BASE_API_URL) public readonly baseURL: string) {
    super(new DefaultPluralizer([]));
  }

  override entityResource(
    entityName: string,
    root: string,
    trailingSlashEndpoints: boolean
  ): string {
    return `${this.baseURL}/api/${entityName.toLowerCase()}`;
  }

  override collectionResource(entityName: string, root: string): string {
    return `${this.baseURL}/api/${entityName.toLowerCase()}`;
  }
}

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
  constructor(@Inject(BASE_API_URL) private baseUrl: string) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const apiReq = request.clone({ url: `${this.baseUrl}/${request.url}` });

    if (request.url.includes('http://') || request.url.includes('https://')) {
      return next.handle(request);
    }

    if (request.url.includes('api')) {
      return next.handle(apiReq);
    }

    return next.handle(request);
  }
}

const routes: Routes = [
  {
    title: 'Home',
    path: '',
    children: [
      {
        title: 'Inventory',
        path: 'inventory',
        loadChildren: () =>
          import('./inventory').then((m) => m.InventoryModule),
      },
      {
        title: 'Messanger',
        path: 'messanger',
        loadChildren: () => import('messanger').then((m) => m.MessangerModule),
      },
      {
        title: 'Notification',
        path: 'notification',
        loadChildren: () =>
          import('notification').then((m) => m.NotificationModule),
      },
    ],
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot({ ...entityDataModuleConfig }),
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules,

      // anchorScrolling: 'enabled',
      canceledNavigationResolution: 'computed',
      enableTracing: environment.production === true,
      onSameUrlNavigation: 'reload',
      initialNavigation: 'enabledNonBlocking',
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: BASE_API_URL,
      useValue: BASE_URL_VALUE,
    },
    NgrxHttpUrlGenerator,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptor,
      multi: true,
    },
    {
      provide: HttpUrlGenerator,
      useClass: NgrxHttpUrlGenerator,
    },
  ],
})
export class AppModule {}
