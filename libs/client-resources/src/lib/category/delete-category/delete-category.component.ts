import {
  ChangeDetectionStrategy,
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
  selector: 'ahmet-emrebas-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteCategoryComponent implements OnInit {
  id!: number;
  item$!: Observable<ICategory>;
  constructor(
    public readonly ds: CategoryService,
    private readonly confirmationService: ConfirmationService,
    private readonly messageService: MessageService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id') as string);
    this.item$ = this.ds.getOneByIdFromCache(this.id);
  }

  entries(item: Record<string, any>) {
    return Object.entries(item);
  }
}
