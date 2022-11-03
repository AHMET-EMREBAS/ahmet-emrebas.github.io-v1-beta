import {
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'ae-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
})
export class DateInputComponent implements OnInit {
  __today = new Date().toISOString();
  today = this.__today.substring(0, this.__today.indexOf('T') + 6);

  constructor() {}

  ngOnInit(): void {}
}
