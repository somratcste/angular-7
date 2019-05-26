import {EventEmitter, Injectable} from '@angular/core';
import { Recipe } from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipies: Recipe[] = [
        new Recipe('A Test Recipe',
            'This is a simply a test',
            'https://c.pxhere.com/photos/8b/0f/food_meat_recipe_power_pork_dishes-604134.jpg!d',
            [
                new Ingredient("Meat", 20),
                new Ingredient("French Fry", 1)
            ]),
        new Recipe('Another Recipe',
            'This is a simply a test',
            'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/IMG_1105.jpg',
            [
                new Ingredient("Buns", 2),
                new Ingredient("Meat", 1)
            ])
      ];

    constructor(private slService: ShoppingListService) {}

    getRecipies() {
        return this.recipies.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}