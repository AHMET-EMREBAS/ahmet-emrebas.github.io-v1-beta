import {
  AfterViewInit,
  Component,
  ViewChild,
} from '@angular/core';

import { MultiSelect } from 'primeng/multiselect';

import { BaseInputComponent } from '../shared-input';

@Component({
  selector: 'ae-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss'],
})
export class SelectInputComponent
  extends BaseInputComponent
  implements AfterViewInit
{
  @ViewChild('select') select!: MultiSelect;
  setValue(event: any) {
    this.select.writeValue([event.itemValue]);
    this.control.setValue(event.itemValue);
    this.control.markAsDirty();
    this.control.markAsTouched();
  }

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
    if (this.defaultValue) {
      this.select.writeValue(this.defaultValue);
    }
  }
}
