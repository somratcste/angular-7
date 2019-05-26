import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipies: Recipe[] = [
        new Recipe('A Test Recipe', 'This is a simply a test', 'https://c.pxhere.com/photos/8b/0f/food_meat_recipe_power_pork_dishes-604134.jpg!d'),
        new Recipe('Another Recipe', 'This is a simply a test', 'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/IMG_1105.jpg')
      ];

    getRecipies() {
        return this.recipies.slice();
    }
}