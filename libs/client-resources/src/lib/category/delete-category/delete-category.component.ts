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
  selector: 'ahmet-emrebas-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.scss'],
})
export class DeleteCategoryComponent implements OnInit {
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

  deleteItem() {
    this.confirmationService.confirm({
      accept: () => {
        this.categoryService.removeOneFromCache(this.id);
        this.messageService.add({
          data: 'Deleted an item',
          severity: 'warn',
          summary: `Deleted ${this.id}`,
        });
        this.backHome();
      },
      header: 'Are you sure to delete item?',
      acceptButtonStyleClass: 'p-button-danger',
      acceptIcon: 'pi pi-trash',
      rejectIcon: 'pi pi-times',
      reject: () => {
        this.backHome();
      },
    });
  }

  entries(item: Record<string, any>) {
    return Object.entries(item);
  }

  backHome() {
    this.router.navigate([''], { relativeTo: this.route });
  }
}
