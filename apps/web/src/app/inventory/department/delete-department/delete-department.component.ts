import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PrmConfirmationService } from 'material/resource';

import { DepartmentService } from '../department.service';

@Component({
  selector: 'ae-delete-department',
  templateUrl: './delete-department.component.html',
  styleUrls: ['./delete-department.component.scss'],
})
export class DeleteDepartmentComponent implements OnInit {
  title = 'Delete Department';
  constructor(
    private readonly prmConfirmationService: PrmConfirmationService,
    private readonly departmentService: DepartmentService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.prmConfirmationService.confirm({
      message: 'Are you sure to delete the item?',
      header: 'Delete',
      icon: 'pi pi-times',
      acceptButtonStyleClass: 'p-button-danger',
      acceptLabel: 'Yes, delete item.',
      accept: () => {
        this.departmentService.deleteItem();
      },
      reject: () => {
        this.router.navigate(['../'], { relativeTo: this.route });
      },
    });
  }
}
