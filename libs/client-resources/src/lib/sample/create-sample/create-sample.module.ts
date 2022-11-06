import { A11yModule } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CurrencyInputModule } from 'material/form/currency-input';
import { FormModule } from 'material/form/form.module';
import { SelectInputModule } from 'material/form/select-input';
import { TextInputModule } from 'material/form/text-input';

import { CreateSampleComponent } from './create-sample.component';

@NgModule({
  declarations: [CreateSampleComponent],
  imports: [
    CommonModule,
    A11yModule,
    FormModule,
    TextInputModule,
    SelectInputModule,
    CurrencyInputModule,
    RouterModule.forChild([
      {
        path: '',
        component: CreateSampleComponent,
        children: [
          {
            path: '',
            loadChildren: () =>
              import('material/create-resource').then(
                (m) => m.CreateResourceModule
              ),
          },
        ],
      },
    ]),
  ],
})
export class CreateSampleModule {}
