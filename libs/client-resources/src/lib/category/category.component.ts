import {
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

import { CategoryService } from './category.service';

@Component({
  selector: 'ahmet-emrebas-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.categoryService.entities$.subscribe(console.log);
  }
}
