import { ChocoStock } from './choco-stock';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

const CHOCO_STOCKS: Array<ChocoStock> = [
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
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chocoStocks: Array<any>;
  isList: boolean;
  modelChocoStock: ChocoStock;

  constructor() {
    this.chocoStocks = new Array();
    this.chocoStocks.push(...CHOCO_STOCKS);
    this.isList = true;
    this.modelChocoStock = new ChocoStock(null, null);
  }

  swapDisplay() {
    this.isList = !this.isList;
  }

  validateForm(ngForm: NgForm) {
    this.chocoStocks.push(new ChocoStock(this.modelChocoStock.id, this.modelChocoStock.stock));
    ngForm.resetForm(new ChocoStock(null, null));
  }
}
