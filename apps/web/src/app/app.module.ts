import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';

import { AppComponent } from './app.component';
import { ResourceComponent } from './resource/resource.component';

@NgModule({
  declarations: [AppComponent, ResourceComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToolbarModule,
    HttpClientModule,
    TableModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
