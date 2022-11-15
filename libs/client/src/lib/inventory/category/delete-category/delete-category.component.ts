import { Component, OnInit } from '@angular/core';

import { ConfirmationService } from 'primeng/api';

import { CategoryService } from '../category.service';

@Component({
  selector: 'ae-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.scss'],
})
export class DeleteCategoryComponent implements OnInit {
  title = 'Delete Category';
  constructor(
    private readonly confirmService: ConfirmationService,
    private readonly categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.confirmService.confirm({
      message: 'Are you sure to delete the item?',
      header: 'Delete',
      icon: 'pi pi-times',
      acceptButtonStyleClass: 'p-button-danger',
      acceptLabel: 'Yes, delete item.',
      accept: () => {
        this.categoryService.deleteItem();
      },
    });
  }
}
