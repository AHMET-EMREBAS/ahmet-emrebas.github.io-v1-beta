import {
  Component,
  OnInit,
} from '@angular/core';

import { NgrxDataService } from '../data-services';

@Component({
  selector: 'ae-create-resource',
  templateUrl: './create-resource.component.html',
  styleUrls: ['./create-resource.component.scss'],
})
export class CreateResourceComponent implements OnInit {
  constructor(private readonly dataService: NgrxDataService<any>) {}
  ngOnInit(): void {
    console.log(`[DataService] ${this.dataService.entityName}`);
  }
}
