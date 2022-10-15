import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'aemat-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  formGroup = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  fields: any[] = [
    {
      name:'name', 
      reqiured:true, 
    }
  ];
}
