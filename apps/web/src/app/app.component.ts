import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ae-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private readonly router: Router) {}

  openMessanger() {
    this.router.navigate(['messanger']);
  }

  openNotification() {
    this.router.navigate(['notification']);
  }
}
