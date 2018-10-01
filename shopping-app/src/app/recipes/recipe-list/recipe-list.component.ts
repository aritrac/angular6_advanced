import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Meat Recipe', 'This is made of meat', 'https://c.pxhere.com/photos/8b/0f/food_meat_recipe_power_pork_dishes-604134.jpg!d'),
    new Recipe('Fish Recipe', 'This is made of fish', 'https://c.pxhere.com/photos/50/03/beirut_power_supply_snack-1375814.jpg!d')
  ];

  constructor() { }

  ngOnInit() {
  }

}
