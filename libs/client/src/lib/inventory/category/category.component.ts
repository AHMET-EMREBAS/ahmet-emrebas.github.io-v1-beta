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
      console.log(event);
      if (event.type.endsWith('add-one')) {
        this.messageService.add({
          severity: 'success',
          summary: 'Created new category',
        });
        this.goHome();
      }
      if (event.type.endsWith('add-one/error')) {
        this.messageService.add({
          severity: 'warning',
          summary: 'Something went wrong creating the category',
        });
      }

      if (event.type.endsWith('update-one')) {
        this.messageService.add({
          severity: 'success',
          summary: 'Updated the category',
        });
        this.goHome();
      }
      if (event.type.endsWith('update-one/error')) {
        this.messageService.add({
          severity: 'warning',
          summary: 'Something went wrong updating the category',
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  goHome() {
    this.router.navigate(['Inventory', 'Category']);
  }
}
