import { Component } from '@angular/core';

import { bounceInOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'ae-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.scss'],
  animations: [bounceInOnEnterAnimation({ anchor: 'enter', duration: 2000 })],
})
export class IntroPageComponent {}
