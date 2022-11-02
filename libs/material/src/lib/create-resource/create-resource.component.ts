import {
  Component,
  Inject,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'ae-create-resource',
  templateUrl: './create-resource.component.html',
  styleUrls: ['./create-resource.component.scss'],
})
export class CreateResourceComponent implements OnInit {
  constructor(@Inject('DataService') private readonly dataService: any) {
    console.log(dataService);
  }

  ngOnInit(): void {}
}
