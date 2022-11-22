import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  PreloadAllModules,
  RouterModule,
  Routes,
} from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { LayoutModule } from 'layout';

import {
  EntityDataModule,
  HttpUrlGenerator,
} from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import {
  BASE_URL_TOKEN,
  BASE_URL_VALUE,
} from './app.config';
import { entityDataModuleConfig } from './app.ngrx';
import {
  AuthComponent,
  AuthModule,
} from './auth';
import {
  BaseUrlInterceptor,
  NgrxURLInterceptor,
} from './interceptors';

const routes: Routes = [
  {
    title: 'Home',
    path: '',
    children: [
      {
        title: 'Login',
        path: '',
        component: AuthComponent,
      },
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
    AuthModule,
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
      enabled: (window as any).electron ? false : environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: BASE_URL_TOKEN,
      useValue: BASE_URL_VALUE,
    },
    NgrxURLInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptor,
      multi: true,
    },
    {
      provide: HttpUrlGenerator,
      useClass: NgrxURLInterceptor,
    },
  ],
})
export class AppModule {}
