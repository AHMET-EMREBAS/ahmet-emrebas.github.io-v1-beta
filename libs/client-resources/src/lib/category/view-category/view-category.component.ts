import {
  AfterViewInit,
  Component,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { ICategory } from '../category.interface';
import { CategoryService } from '../category.service';

@Component({
  selector: 'ahmet-emrebas-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.scss'],
})
export class ViewCategoryComponent implements AfterViewInit {
  searchControl = new FormControl('');

  contextMenuItems = [
    {
      label: 'delete',
      icon: 'pi pi-trash',
      command: () =>
        this.router.navigate(['delete', this.selectedcontextItem.id]),
    },
  ];
  columns = [
    { field: 'id', header: '#' },
    { field: 'name', header: 'Name' },
  ];
  globalFilterFields = ['id', 'name'];
  selectedItems = [];
  selectedcontextItem!: ICategory;
  entities$ = this.ds.entities$;

  constructor(
    private readonly ds: CategoryService,
    private readonly router: Router
  ) {}

  ngAfterViewInit(): void {
    this.ds.getAll();
  }
}
