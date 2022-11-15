import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';

import { DepartmentService } from './department.service';

@Component({
  selector: 'ae-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
})
export class DepartmentComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly service: DepartmentService,
    private readonly messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.sub = this.service.entityActions$.subscribe((event) => {
      console.log(event);
      if (event.type.endsWith('add-one')) {
        this.messageService.add({
          severity: 'success',
          summary: 'Created new department',
        });
        this.goHome();
      }
      if (event.type.endsWith('add-one/error')) {
        this.messageService.add({
          severity: 'warning',
          summary: 'Something went wrong creating the department',
        });
      }

      if (event.type.endsWith('update-one')) {
        this.messageService.add({
          severity: 'success',
          summary: 'Updated the department',
        });
        this.goHome();
      }
      if (event.type.endsWith('update-one/error')) {
        this.messageService.add({
          severity: 'warning',
          summary: 'Something went wrong updating the department',
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  goHome() {
    this.router.navigate(['inventory', 'department']);
  }
}
