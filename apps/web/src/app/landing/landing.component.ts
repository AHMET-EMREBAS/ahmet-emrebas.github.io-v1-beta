import {
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'ae-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  title = '';
  ngOnInit(): void {
    this.title = window.document.title;
  }
}
