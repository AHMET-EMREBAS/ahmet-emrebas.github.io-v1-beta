import { Component, OnInit } from '@angular/core';

import { ConfirmationService } from 'primeng/api';

import { PermissionService } from '../permission.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ae-delete-permission',
  templateUrl: './delete-permission.component.html',
  styleUrls: ['./delete-permission.component.scss'],
})
export class DeletePermissionComponent implements OnInit {
  title = 'Delete Permission';
  constructor(
    private readonly confirmService: ConfirmationService,
    private readonly permissionService: PermissionService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.confirmService.confirm({
      message: 'Are you sure to delete the item?',
      header: 'Delete',
      icon: 'pi pi-times',
      acceptButtonStyleClass: 'p-button-danger',
      acceptLabel: 'Yes, delete item.',
      accept: () => {
        this.permissionService.deleteItem();
      },
      reject: () => {
        this.router.navigate(['../'], { relativeTo: this.route });
      },
    });
  }
}
