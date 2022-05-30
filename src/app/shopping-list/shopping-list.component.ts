import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients = [
    new Ingredients('Beef', 1),
    new Ingredients('Cucumber', 5),
    new Ingredients('Tomato', 10)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
