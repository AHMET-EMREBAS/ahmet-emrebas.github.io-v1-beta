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
    path: 'feature',
    loadChildren: () =>
      import('client-resources/inventory/feature').then((m) => m.FeatureModule),
  },

  {
    path: 'location',
    loadChildren: () =>
      import('client-resources/inventory/location').then(
        (m) => m.LocationModule
      ),
  },

  {
    path: 'order',
    loadChildren: () =>
      import('client-resources/inventory/order').then((m) => m.OrderModule),
  },

  {
    path: 'permission',
    loadChildren: () =>
      import('client-resources/inventory/permission').then(
        (m) => m.PermissionModule
      ),
  },

  {
    path: 'price',
    loadChildren: () =>
      import('client-resources/inventory/price').then((m) => m.PriceModule),
  },

  {
    path: 'pricelevel',
    loadChildren: () =>
      import('client-resources/inventory/pricelevel').then(
        (m) => m.PricelevelModule
      ),
  },

  {
    path: 'product',
    loadChildren: () =>
      import('client-resources/inventory/product').then((m) => m.ProductModule),
  },

  {
    path: 'quantity',
    loadChildren: () =>
      import('client-resources/inventory/quantity').then(
        (m) => m.QuantityModule
      ),
  },

  {
    path: 'resource',
    loadChildren: () =>
      import('client-resources/inventory/resource').then(
        (m) => m.ResourceModule
      ),
  },

  {
    path: 'sku',
    loadChildren: () =>
      import('client-resources/inventory/sku').then((m) => m.SkuModule),
  },

  {
    path: 'store',
    loadChildren: () =>
      import('client-resources/inventory/store').then((m) => m.StoreModule),
  },

  {
    path: 'transaction',
    loadChildren: () =>
      import('client-resources/inventory/transaction').then(
        (m) => m.TransactionModule
      ),
  },

  {
    path: 'user',
    loadChildren: () =>
      import('client-resources/inventory/user').then((m) => m.UserModule),
  },

  {
    path: 'variant',
    loadChildren: () =>
      import('client-resources/inventory/variant').then((m) => m.VariantModule),
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
