import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';

import { CategoryService } from './category.service';

@Component({
  selector: 'ae-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly service: CategoryService,
    private readonly messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.sub = this.service.entityActions$.subscribe((event) => {
      if (event.type.endsWith('add-one/success')) {
        this.messageService.add({
          severity: 'success',
          summary: 'Created',
        });
        this.goHome();
      }

      if (event.type.endsWith('delete-one/success')) {
        this.messageService.add({
          severity: 'success',
          summary: 'Deleted',
        });
        this.goHome();
      }

      if (event.type.endsWith('update-one/success')) {
        this.messageService.add({
          severity: 'success',
          summary: 'Updated',
        });
        this.goHome();
      }

      if (event.type.endsWith('add-one/error')) {
        this.messageService.add({
          severity: 'error',
          summary: 'Not Created',
        });
        this.goHome();
      }

      if (event.type.endsWith('delete-one/error')) {
        this.messageService.add({
          severity: 'error',
          summary: 'Not Deleted',
        });
        this.goHome();
      }

      if (event.type.endsWith('update-one/error')) {
        this.messageService.add({
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
    this.router.navigate(['inventory', 'category']);
  }
}
