import {
  Component,
  OnInit,
} from '@angular/core';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

import {
  ConfirmationService,
  MessageService,
} from 'primeng/api';
import { Observable } from 'rxjs';

import { ICategory } from '../category.interface';
import { CategoryService } from '../category.service';

@Component({
  selector: 'ahmet-emrebas-detail-category',
  templateUrl: './detail-category.component.html',
  styleUrls: ['./detail-category.component.scss'],
})
export class DetailCategoryComponent implements OnInit {
  id!: number;
  item$!: Observable<ICategory>;
  constructor(
    private readonly categoryService: CategoryService,
    private readonly confirmationService: ConfirmationService,
    private readonly messageService: MessageService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id') as string);
    this.item$ = this.categoryService.getOneByIdFromCache(this.id);
  }

  entries(item: Record<string, any>) {
    return Object.entries(item);
  }
}
