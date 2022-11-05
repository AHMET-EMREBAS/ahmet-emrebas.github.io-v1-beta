import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormModule } from 'material/form/form.module';
import { SelectInputModule } from 'material/form/select-input';
import { TextInputModule } from 'material/form/text-input';

import { CreateSampleComponent } from './create-sample.component';

@NgModule({
  declarations: [CreateSampleComponent],
  imports: [
    CommonModule,
    FormModule,
    TextInputModule,
    SelectInputModule,
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
