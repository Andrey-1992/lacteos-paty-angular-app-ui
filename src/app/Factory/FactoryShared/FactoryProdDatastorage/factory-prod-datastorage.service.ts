import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class DataStorageService {

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://udemy-recipe-course-f2d4f-default-rtdb.firebaseio.com/recipes.json', recipes)
      .subscribe(response => { console.log(response) })
  }
}
