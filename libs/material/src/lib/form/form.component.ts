import {
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { EntityCollectionService } from '@ngrx/data';

import { ENTITY_COLLECTION_SERVICE_TOKEN } from '../tokens';

@Component({
  selector: 'ae-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  formGroup!: FormGroup;
  constructor(
    @Inject(ENTITY_COLLECTION_SERVICE_TOKEN)
    public readonly ds: EntityCollectionService<any>
  ) {}

  ngOnInit(): void {
    const group = new FormGroup({});
  }
}
