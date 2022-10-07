import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import {
  DynamicTableModule,
  DynamicTableService,
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

    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot({
      entityMetadata: {
        Store: {},
      },
      pluralNames: {
        Store: 'store',
      },
    }),
    DynamicTableModule,

    HttpClientModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [
    {
      provide: DynamicTableService.name,
      useClass: StoreService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
