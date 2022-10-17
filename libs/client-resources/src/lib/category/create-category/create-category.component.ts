import {
  Component,
  OnInit,
} from '@angular/core';

import { CategoryService } from '../category.service';

@Component({
  selector: 'ahmet-emrebas-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss'],
})
export class CreateCategoryComponent implements OnInit {
  constructor(private readonly categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.addOneToCache({ id: 1, name: 'Some' });
  }
}
