import { Component, OnInit } from '@angular/core';

import { ConfirmationService } from 'primeng/api';

import { StoreService } from '../store.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ae-delete-store',
  templateUrl: './delete-store.component.html',
  styleUrls: ['./delete-store.component.scss'],
})
export class DeleteStoreComponent implements OnInit {
  title = 'Delete Store';
  constructor(
    private readonly confirmService: ConfirmationService,
    private readonly storeService: StoreService,
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
        this.storeService.deleteItem();
      },
      reject: () => {
        this.router.navigate(['../'], { relativeTo: this.route });
      },
    });
  }
}
