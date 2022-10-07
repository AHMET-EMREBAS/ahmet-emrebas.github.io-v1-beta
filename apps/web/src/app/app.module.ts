import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';

import { AppComponent } from './app.component';
import { ResourceComponent } from './resource/resource.component';

@NgModule({
  declarations: [AppComponent, ResourceComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    ToolbarModule,
    ButtonModule,
    InputTextModule,
    HttpClientModule,
    MultiSelectModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
