import { Component, OnInit } from '@angular/core';
import { CocktailServiceService } from "../cocktail-service.service";
import { Cocktails } from '../model/cocktail';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent {
  cocktails: Cocktails [] = [];
  constructor(private service:CocktailServiceService){}
  ngOnInit(){
this.cocktails= this.service.getCocktails()
  }

  

}
