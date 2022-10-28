import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { EntityCollectionServiceBase } from '@ngrx/data';

@Component({
  selector: 'ahmet-emrebas-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
})
export class CrudComponent implements OnInit {
  @Input() globalFilterFields: string[] = ['id'];

  data$ = this.dataService.entities$;
  constructor(private readonly dataService: EntityCollectionServiceBase<any>) {}

  ngOnInit(): void {}
}
