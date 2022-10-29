import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { AllModules } from 'material/all';

import { LandingComponent } from './landing.component';

window.location.href = '#/home';

const routes: Routes = [
  {
    title: 'Welcome',
    path: '',
    component: LandingComponent,
    children: [],
  },
];

@NgModule({
  declarations: [LandingComponent],
  imports: [CommonModule, AllModules, RouterModule.forChild(routes)],
})
export class LandingModule {}
