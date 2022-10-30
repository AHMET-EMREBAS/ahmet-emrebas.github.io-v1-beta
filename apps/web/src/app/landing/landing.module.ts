import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { AllModules } from 'material/all';

import { LandingComponent } from './landing.component';

const routes: Routes = [
  {
    title: 'Welcome',
    path: '',
    component: LandingComponent,
    children: [],
  },
];

const isIntroPage =
  window.location.href.split('#')[1].split('/')[1] ==
  'LodingPagesPleaseWaitForAWhileOrDoNotWait';

if (isIntroPage) {
  window.location.href = '#/home';
}

@NgModule({
  declarations: [LandingComponent],
  imports: [CommonModule, AllModules, RouterModule.forChild(routes)],
})
export class LandingModule {}
