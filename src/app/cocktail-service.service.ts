import { Injectable } from '@angular/core';
import { Cocktails } from "../app/model/cocktail";
import { CocktailData } from './model/data';
@Injectable({
  providedIn: 'root',
})
export class CocktailServiceService {

  constructor() {}

  public getCocktails(){
    return CocktailData
  }
}
