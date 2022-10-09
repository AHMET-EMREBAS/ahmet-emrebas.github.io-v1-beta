import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import {
  BASE_HTTP_CLIENT_PATH,
  DynamicTableService,
  HttpClientService,
} from 'ae-material';

import { EntityDataModule } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { StoreService } from './store.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    HttpClientModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot({
      entityMetadata: {
        Store: {},
      },
      pluralNames: {
        Store: 'Stores',
      },
    }),

    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [
    {
      provide: DynamicTableService.name,
      useClass: StoreService,
    },
    {
      provide: BASE_HTTP_CLIENT_PATH,
      useValue: 'http://localhost:3333/api',
    },
    HttpClientService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
