import { Component } from '@angular/core';

import { CategoryService } from '../category.service';

@Component({
  selector: 'ahmet-emrebas-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss'],
})
export class CreateCategoryComponent {
  constructor(public readonly ds: CategoryService) {}
}
