import { HeroesService, Heroe } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:Heroe [] = [];

  constructor( private _heroesService:HeroesService ) {

  }

  ngOnInit(): void {

    this.heroes = this._heroesService.getHeroes();

    console.log(this.heroes);
  }

}
