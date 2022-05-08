import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../../shared/services/drink.service';
import { Drink } from '../../shared/models/Drink';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit {

  beers: Array<Drink> = [];
  softs: Array<Drink> = [];
  coffees: Array<Drink> = [];
  whiskeys: Array<Drink> = [];
  displayedColumns: string[] = ['name', 'price'];

  constructor(private drinkService: DrinkService) { }

  ngOnInit(): void {
    this.drinkService.getByType('beer').subscribe(drinks => {
      this.beers = drinks;
    });
    this.drinkService.getByType('soft').subscribe(drinks => {
      this.softs = drinks;
    });
    this.drinkService.getByType('coffee').subscribe(drinks => {
      this.coffees = drinks;
    });
    this.drinkService.getByType('whiskey').subscribe(drinks => {
      this.whiskeys = drinks;
    });
  }

}
