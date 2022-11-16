import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PrmMessageService } from 'material/resource';
import { Subscription } from 'rxjs';

import { QuantityService } from './quantity.service';

@Component({
  selector: 'ae-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss'],
})
export class QuantityComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly resourceService: QuantityService,
    private readonly prmMessageService: PrmMessageService
  ) {}

  ngOnInit(): void {
    this.sub = this.resourceService.entityActions$.subscribe((event) => {
      if (event.type.endsWith('add-one/success')) {
        this.prmMessageService.add({
          severity: 'success',
          summary: 'Created',
        });
        this.goHome();
      }

      if (event.type.endsWith('delete-one/success')) {
        this.prmMessageService.add({
          severity: 'success',
          summary: 'Deleted',
        });
        this.goHome();
      }

      if (event.type.endsWith('update-one/success')) {
        this.prmMessageService.add({
          severity: 'success',
          summary: 'Updated',
        });
        this.goHome();
      }

      if (event.type.endsWith('add-one/error')) {
        this.prmMessageService.add({
          severity: 'error',
          summary: 'Not Created',
        });
        this.goHome();
      }

      if (event.type.endsWith('delete-one/error')) {
        this.prmMessageService.add({
          severity: 'error',
          summary: 'Not Deleted',
        });
        this.goHome();
      }

      if (event.type.endsWith('update-one/error')) {
        this.prmMessageService.add({
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
    this.router.navigate(['inventory', 'quantity']);
  }
}
