import { Component } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {

  constructor() {

  }

  carName = 'Ford';
  carYear = '2015';

  getName() {

  }

}
