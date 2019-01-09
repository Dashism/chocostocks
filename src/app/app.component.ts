import { Component } from '@angular/core';

const CHOCO_STOCKS = [
  {
    id: 0,
    stock: 100
  }, {
    id: 1,
    stock: 300
  }, {
    id: 2,
    stock: 0
  }, {
    id: 3,
    stock: 100
  }, {
    id: 4,
    stock: 100
  }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chocostocks';
  chocoStocks: Array<any>;

  constructor() {
    this.chocoStocks = new Array();
    this.chocoStocks.push(...CHOCO_STOCKS);
  }
}
