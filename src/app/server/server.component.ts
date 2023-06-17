import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  foods: string[] = [];
  food: string = '';
  isCheck: boolean = false;
  recipes: Map<string, string[]> = new Map();

  constructor() {
    this.initializeRecipes();
  }

  initializeRecipes(){
    this.recipes.set("SpaghettiCarbonara",['Spaghetti','bacon','eggyolks','Parmesancheese','blackpepper','salt']);
    this.recipes.set("ThaiGreenCurry",['Greencurrypaste','coconutmilk','chickenorvegetables','limejuice','sugar','salt']);
    this.recipes.set("ChocolateCake",['Flour','cocoapowder','sugar','eggs','milk','butter','chocolate','bakingpowder','salt']);
    this.recipes.set("MexicanCornTortillaChips",['Corntortillas','oliveoil','salt']);

  }

  foodPlus() {
    this.isCheck = false;
    if (this.food !== '') {
      this.foods.push(this.food);
      this.food = '';
    }
  }

  foodClear() {
    this.foods = [];
    this.isCheck = false;
  }

  setMapValue(key: string, values: string[]) {
    this.recipes.set(key, values);
  }

  getMapValue(key: string) {
    return this.recipes.get(key);
  }

  foodCheck(): string | undefined {
    this.isCheck = true;
    for (const [key, values] of this.recipes) {
      if (values.every(value => this.foods.includes(value))) {
        return 'RECIPE MATCH : ' + key;
      }
    }
    return 'RECIPE NOT MATCH ';
  }
}
