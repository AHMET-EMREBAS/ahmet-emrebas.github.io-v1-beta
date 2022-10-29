import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  RouterModule,
  Routes,
} from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { SpinnerModule } from 'primeng/spinner';

import { EntityDataModule } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { entityDataModuleConfig } from './entity-data-module-config';
import { IntroPageComponent } from './intro-page/intro-page.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [{ path: '', component: IntroPageComponent }],
  },
];

@NgModule({
  declarations: [AppComponent, IntroPageComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {
      useHash: true,
      onSameUrlNavigation: 'ignore',
    }),
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
    SpinnerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
