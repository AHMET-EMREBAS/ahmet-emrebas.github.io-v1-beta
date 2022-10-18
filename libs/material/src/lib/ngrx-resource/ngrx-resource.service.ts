import {
  FormControl,
  FormGroup,
} from '@angular/forms';
import { Router } from '@angular/router';

import {
  ConfirmationService,
  FilterMetadata,
  MenuItem,
  MessageService,
} from 'primeng/api';

import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

import { InputControl } from '../form';

export class NgrxResourceService<
  T extends { id: number }
> extends EntityCollectionServiceBase<T> {
  controls: Record<string, InputControl> = {
    name: new InputControl({
      minLength: 3,
      maxLength: 20,
      placeholder: 'Category Name',
      required: true,
      label: 'Category Name',
    }),
  };

  formGroup = new FormGroup(this.controls);

  selectedItems: T[] = [];

  selectedcontextItem!: T;

  contextMenuItems: MenuItem[] = [
    {
      label: 'Edit',
      icon: 'pi pi-pencil',
      command: () => this.updatePage(this.selectedcontextItem.id),
    },
    {
      label: 'Delete',
      styleClass: 'p-button-danger',
      icon: 'pi pi-trash',
      command: () => {
        this.deletePage(this.selectedcontextItem.id);
      },
    },
  ];

  columns: { header: string; field: string }[] = [
    { header: '#', field: 'id' },
    { header: 'Name', field: 'name' },
  ];

  globalFilterFields = ['id', 'name'];

  searchControl = new FormControl('');

  constructor(
    entityName: string,
    ef: EntityCollectionServiceElementsFactory,
    public router: Router,
    public confirmService: ConfirmationService,
    public messageSevice: MessageService
  ) {
    super(entityName, ef);
  }

  saveOne(formValue: T) {
    return this.add(formValue);
  }

  findAll() {
    return this.getAll();
  }

  filter(options: { [key: string]: FilterMetadata[] }) {
    // TODO: Filter remote
  }

  deleteById(id: number) {
    this.deleteItems([id]);
  }

  deleteItems(ids: number[]) {
    const id = ids.pop();

    if (id) {
      this.confirmService.confirm({
        accept: () => {
          this.delete(id);

          this.messageSevice.add({
            data: 'Deleted an item',
            severity: 'warn',
            summary: `Deleted ${id}`,
          });

          setTimeout(() => {
            this.deleteItems(ids);
          }, 500);
        },
        header: `Are you sure to delete item with id, ${id}?`,
        acceptButtonStyleClass: 'p-button-danger',
        acceptIcon: 'pi pi-trash',
        rejectIcon: 'pi pi-times',
        reject: () => {
          this.tablePage();
        },
      });
      return;
    }
    this.tablePage();
  }

  async deleteSelection() {
    if (await this.deletePage(this.selectedItems[0].id)) {
      this.deleteItems(this.selectedItems.map((e) => e.id));
    }
  }

  submitForm() {
    if (this.formGroup.dirty && this.formGroup.valid) {
      this.saveOne(this.formGroup.value);
      console.log(this.formGroup.value);
      return;
    }
  }

  resetForm() {
    this.formGroup.reset();
  }

  async tablePage() {
    return await this.router.navigate(['']);
  }

  async deletePage(id: number) {
    return await this.router.navigate(['delete', id]);
  }

  async createPage(properties: T) {
    return await this.router.navigate(['create'], { queryParams: properties });
  }

  async updatePage(id: number) {
    return await this.router.navigate(['update', id]);
  }
}
