import {
  AfterViewInit,
  Component,
} from '@angular/core';

@Component({
  selector: 'ae-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {}
}
