import { Component, OnInit } from '@angular/core';

import { ConfirmationService } from 'primeng/api';

import { DepartmentService } from '../department.service';

@Component({
  selector: 'ae-delete-department',
  templateUrl: './delete-department.component.html',
  styleUrls: ['./delete-department.component.scss'],
})
export class DeleteDepartmentComponent implements OnInit {
  title = 'Delete Department';
  constructor(
    private readonly confirmService: ConfirmationService,
    private readonly service: DepartmentService
  ) {}

  ngOnInit(): void {
    this.confirmService.confirm({
      message: 'Are you sure to delete the item?',
      header: 'Delete',
      icon: 'pi pi-times',
      acceptButtonStyleClass: 'p-button-danger',
      acceptLabel: 'Yes, delete item.',
      accept: () => {
        this.service.deleteItem();
      },
    });
  }
}
