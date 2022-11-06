import {
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

import { ConfirmationService } from 'primeng/api';
import {
  map,
  switchMap,
} from 'rxjs';

import { SampleService } from '../sample.service';

@Component({
  selector: 'ae-update-sample',
  templateUrl: './update-sample.component.html',
  styleUrls: ['./update-sample.component.scss'],
})
export class UpdateSampleComponent implements OnInit, AfterViewInit {
  item$ = this.route.paramMap.pipe(
    switchMap((param) => {
      return this.ss.getByKey(param.get('id'));
    }),
    map((data) => {
      return data;
    })
  );

  constructor(
    public readonly ss: SampleService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly confirmService: ConfirmationService
  ) {}
  ngAfterViewInit(): void {}

  ngOnInit(): void {}
}
