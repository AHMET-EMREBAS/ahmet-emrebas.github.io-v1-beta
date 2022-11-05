import {
  Component,
  OnInit,
} from '@angular/core';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

import { fadeInOnEnterAnimation } from 'angular-animations';
import { ConfirmationService } from 'primeng/api';

import { Sample } from '../sample.interface';
import { SampleService } from '../sample.service';

@Component({
  selector: 'ae-delete-sample',
  templateUrl: './delete-sample.component.html',
  styleUrls: ['./delete-sample.component.scss'],
  animations: [fadeInOnEnterAnimation({ anchor: 'enter' })],
})
export class DeleteSampleComponent implements OnInit {
  item!: Sample;

  constructor(
    public readonly ds: SampleService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly confirmService: ConfirmationService
  ) {}
  ngOnInit(): void {
    const hasItem = this.ds.contextMenuSelection;

    if (hasItem) {
      this.item = hasItem;
    } else {
      this.router.navigate(['../table-view']);
    }
  }

  deleteItem() {
    this.confirmService.confirm({
      message: `Are you sure to delete the item with id, ${this.item?.id} ?`,
      accept: () => {
        this.ds.delete(this.item?.id + '');
        this.router.navigate(['../table-view'], {
          relativeTo: this.activatedRoute,
        });
      },
      reject: () => {
        this.router.navigate(['../table-view'], {
          relativeTo: this.activatedRoute,
        });
      },
    });
  }
}
