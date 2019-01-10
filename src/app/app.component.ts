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
  // Déclaration d'un attribut permettant à la fois
  // de savoir (valeur ou undefined) si on est en
  // mode édition et pour quel id (puisqu'on peut
  // le modifier). L'id mémorisé sert à retrouver
  // le stock dans le tableau avec l'ancien id pour
  // pouvoir le remplacer par celui mis à jour.
  editId: number;

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
    const newStock = new ChocoStock(this.modelChocoStock.id, this.modelChocoStock.stock);
    // On doit vérifier "!== undefined" car une
    // variable de type number interprétée dans
    // une condition sera faux si la valeur est 0.
    // Or dans notre cas l'id 0 est correct, il faut
    // donc obtenir vrai.
    if (this.editId !== undefined) {
      const index = this.chocoStocks.findIndex(
        // On recherche dans le tableau avec l'ancien
        // identifiant non modifié par l'utilisateur.
        (stock) => stock.id === this.editId
      );
      if (index >= 0) {
        this.chocoStocks.splice(index, 1, newStock);
      }
      this.editId = undefined;
    } else {
      this.chocoStocks.push(newStock);
    }
    ngForm.resetForm(new ChocoStock(null, null));
  }

  delete(id: number) {
    const index = this.chocoStocks.findIndex(
      (stock) => stock.id === id
    );
    if (index >= 0) {
      this.chocoStocks.splice(index, 1);
    }
  }

  edit(stock: ChocoStock) {
    this.editId = stock.id;
    this.modelChocoStock = new ChocoStock(stock.id, stock.stock);
    this.swapDisplay();
  }
}
