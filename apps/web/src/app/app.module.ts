import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  PreloadAllModules,
  RouterModule,
  Routes,
} from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { EntityDataModule } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { entityDataModuleConfig } from './ngrx.meta';

const routes: Routes = [
  {
    title: 'Welcome ( loading )',
    path: '',
    component: IntroPageComponent,
  },
  {
    path: 'home',
    children: [
      {
        path: '',
        loadChildren: () => import('./landing').then((m) => m.LandingModule),
      },
    ],
  },
  {
    path: 'home',
    children: [
      {
        path: '',
        loadChildren: () => import('./landing').then((m) => m.LandingModule),
      },
    ],
  },
];

@NgModule({
  declarations: [AppComponent, IntroPageComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityDataModuleConfig),
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules,
      // initialNavigation: 'enabledNonBlocking',
      anchorScrolling: 'enabled',
      canceledNavigationResolution: 'computed',
      enableTracing: environment.production === true,
      onSameUrlNavigation: 'ignore',
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
})
export class AppModule {}
