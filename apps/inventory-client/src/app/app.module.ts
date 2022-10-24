import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [AppComponent, ContactComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'contact',
          component: ContactComponent,
        },
      ],
      { useHash: true, initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
