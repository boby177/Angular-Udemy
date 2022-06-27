import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>()

    recipes: Recipe[] = [
        new Recipe('Nasi Goreng Recipe', 
        'This is nasi goreng', 
        'https://awsimages.detik.net.id/community/media/visual/2021/08/25/resep-nasi-goreng-sosis-ala-warung-bhakti_43.jpeg?w=700&q=90', [
            new Ingredient('Rice', 1),
            new Ingredient('Egg', 2)
        ]),
        new Recipe('Batagor Recipe', 
        'This is batagor', 
        'https://dikemas.com/uploads/2019/05/resep-batagor-enak-yang-bisa-kamu-jadikan-ladang-bisnis.jpg',[
            new Ingredient('Flour', 2),
            new Ingredient('Tofu', 10)
        ])
    ]

    constructor(private slService: ShoppingListService) {
        
    }

    getRecipes() {
        return this.recipes.slice()
    }

    getRecipe(index: number) {
        return this.recipes[index]
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients)
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe)
        this.recipesChanged.next(this.recipes.slice())
    }

    updateRecipe(index:number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe
        this.recipesChanged.next(this.recipes.slice())
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1)
        this.recipesChanged.next(this.recipes.slice())
    }
}