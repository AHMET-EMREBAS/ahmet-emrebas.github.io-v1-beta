import { Component, OnInit } from '@angular/core';

import { ConfirmationService } from 'primeng/api';

import { MessageService } from '../message.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ae-delete-message',
  templateUrl: './delete-message.component.html',
  styleUrls: ['./delete-message.component.scss'],
})
export class DeleteMessageComponent implements OnInit {
  title = 'Delete Message';
  constructor(
    private readonly confirmService: ConfirmationService,
    private readonly messageService: MessageService,
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
        this.messageService.deleteItem();
      },
      reject: () => {
        this.router.navigate(['../'], { relativeTo: this.route });
      },
    });
  }
}
