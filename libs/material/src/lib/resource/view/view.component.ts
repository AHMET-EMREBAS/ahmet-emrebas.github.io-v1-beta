import {
  Component,
  OnInit,
} from '@angular/core';

import { ResourceService } from '../resource.service';

@Component({
  selector: 'aemat-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  items$ = this.resourceService.filteredEntities$;

  columns: { header: string; field: string }[] = [
    { header: 'id', field: 'id' },
    { header: 'name', field: 'name' },
  ];

  constructor(private readonly resourceService: ResourceService) {}

  ngOnInit(): void {
    console.log('init view component');

    this.resourceService.getAll();
  }
}
