import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PrmMessageService } from 'material/resource';
import { Subscription } from 'rxjs';

import { UserService } from './user.service';

@Component({
  selector: 'ae-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly resourceService: UserService,
    private readonly prmMessageService: PrmMessageService
  ) {}

  ngOnInit(): void {
    this.sub = this.resourceService.entityActions$.subscribe((event) => {
      if (event.type.endsWith('add-one/success')) {
        this.prmMessageService.add({
          key: 'resource',
          severity: 'success',
          summary: 'Created',
        });
        this.goHome();
      }

      if (event.type.endsWith('delete-one/success')) {
        this.prmMessageService.add({
          key: 'resource',
          severity: 'success',
          summary: 'Deleted',
        });
        this.goHome();
      }

      if (event.type.endsWith('update-one/success')) {
        this.prmMessageService.add({
          key: 'resource',
          severity: 'success',
          summary: 'Updated',
        });
        this.goHome();
      }

      if (event.type.endsWith('add-one/error')) {
        this.prmMessageService.add({
          key: 'resource',
          severity: 'error',
          summary: 'Not Created',
        });
        this.goHome();
      }

      if (event.type.endsWith('delete-one/error')) {
        this.prmMessageService.add({
          key: 'resource',
          severity: 'error',
          summary: 'Not Deleted',
        });
        this.goHome();
      }

      if (event.type.endsWith('update-one/error')) {
        this.prmMessageService.add({
          key: 'resource',
          severity: 'error',
          summary: 'Not Updated',
        });
        this.goHome();
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  goHome() {
    this.router.navigate(['inventory', 'user']);
  }
}
