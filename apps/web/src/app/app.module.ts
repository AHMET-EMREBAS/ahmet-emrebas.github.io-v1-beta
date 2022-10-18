import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  RouterModule,
  Routes,
} from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { provideLayoutMenu } from 'libs/material/src/lib/layout/providers';
import { LayoutModule } from 'material';

import { EntityDataModule } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { entityDataModuleConfig } from './entity-data-module-config';

const routes: Routes = [];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    RouterModule.forRoot(routes, { useHash: true }),
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityDataModuleConfig),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [
    provideLayoutMenu({
      TOP_LEFT: [
        {
          label: 'Resources',
          items: [{ label: 'Products' }],
        },
      ],
      BOTTOM_LEFT: [
        {
          label: 'Profile',
        },
      ],
      TOP_RIGHT: [
        {
          label: 'Features',
        },
      ],
      BOTTOM_RIGHT: [
        {
          label: 'Config',
        },
      ],
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
