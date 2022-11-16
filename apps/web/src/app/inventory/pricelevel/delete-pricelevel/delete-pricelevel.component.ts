import { Component, OnInit } from '@angular/core';

import { ConfirmationService } from 'primeng/api';

import { PricelevelService } from '../pricelevel.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ae-delete-pricelevel',
  templateUrl: './delete-pricelevel.component.html',
  styleUrls: ['./delete-pricelevel.component.scss'],
})
export class DeletePricelevelComponent implements OnInit {
  title = 'Delete Pricelevel';
  constructor(
    private readonly confirmService: ConfirmationService,
    private readonly pricelevelService: PricelevelService,
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
        this.pricelevelService.deleteItem();
      },
      reject: () => {
        this.router.navigate(['../'], { relativeTo: this.route });
      },
    });
  }
}
