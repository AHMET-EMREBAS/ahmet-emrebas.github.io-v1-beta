import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
    path: 'product',
    loadChildren: () =>
      import('client-resources/inventory/product').then((m) => m.ProductModule),
  },

  {
    path: 'category',
    loadChildren: () =>
      import('client-resources/inventory/category').then(
        (m) => m.CategoryModule
      ),
  },

  {
    path: 'department',
    loadChildren: () =>
      import('client-resources/inventory/department').then(
        (m) => m.DepartmentModule
      ),
  },

  {
    path: 'pricelevel',
    loadChildren: () =>
      import('client-resources/inventory/pricelevel').then(
        (m) => m.PricelevelModule
      ),
  },

  {
    path: 'store',
    loadChildren: () =>
      import('client-resources/inventory/store').then((m) => m.StoreModule),
  },

  {
    path: 'price',
    loadChildren: () =>
      import('client-resources/inventory/price').then((m) => m.PriceModule),
  },

  {
    path: 'quantity',
    loadChildren: () =>
      import('client-resources/inventory/quantity').then(
        (m) => m.QuantityModule
      ),
  },

  {
    path: 'order',
    loadChildren: () =>
      import('client-resources/inventory/order').then((m) => m.OrderModule),
  },

  {
    path: 'transaction',
    loadChildren: () =>
      import('client-resources/inventory/transaction').then(
        (m) => m.TransactionModule
      ),
  },

  {
    path: 'sample',
    loadChildren: () =>
      import('client-resources/inventory/sample').then((m) => m.SampleModule),
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
})
export class AppModule {}
