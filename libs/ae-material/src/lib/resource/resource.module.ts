import { CommonModule } from '@angular/common';
import {
  ModuleWithProviders,
  NgModule,
} from '@angular/core';

import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { ViewOneComponent } from './view-one/view-one.component';

@NgModule({
  declarations: [
    ViewAllComponent,
    CreateComponent,
    UpdateComponent,
    DeleteComponent,
    ViewOneComponent,
  ],
  imports: [CommonModule],
})
export class ResourceModule {
  static configure(): ModuleWithProviders<ResourceModule> {
    return {
      ngModule: ResourceModule,
      providers: [],
    };
  }
}
