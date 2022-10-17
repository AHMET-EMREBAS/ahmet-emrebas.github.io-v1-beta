import {
  Component,
  OnInit,
} from '@angular/core';

import { CategoryService } from './category.service';

@Component({
  selector: 'ahmet-emrebas-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  constructor(private readonly categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.entities$.subscribe(console.log);
  }
}
