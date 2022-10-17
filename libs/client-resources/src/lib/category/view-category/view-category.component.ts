import {
  Component,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

import {
  ConfirmationService,
  FilterMetadata,
  MessageService,
} from 'primeng/api';
import { Observable } from 'rxjs';

import { ICategory } from '../category.interface';
import { CategoryService } from '../category.service';

@Component({
  selector: 'ahmet-emrebas-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.scss'],
})
export class ViewCategoryComponent implements OnInit {
  selectedItems: ICategory[] = [];
  entities$!: Observable<ICategory[]>;
  columns: { header: string; field: string }[] = [
    { header: '#', field: 'id' },
    { header: 'Category', field: 'name' },
  ];
  globalFilterFields = ['id', 'name'];
  searchControl = new FormControl('');

  constructor(
    private readonly categoryService: CategoryService,
    private readonly confirmationService: ConfirmationService,
    private readonly messageService: MessageService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.entities$ = this.categoryService.entities$;
    // for (let i = 0; i < 50; i++) {
    //   this.categoryService.addOneToCache({ name: `item ${i}`, id: i });
    // }
  }

  filterTable(event: {
    filteredValue: ICategory[];
    filters: {
      [key: string]: FilterMetadata[];
    };
  }) {
    console.log(event);
  }

  deleteSelections() {
    this.router.navigate(['delete', this.selectedItems.pop()?.id]);
  }
}
