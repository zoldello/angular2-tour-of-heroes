import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './app/app.component.html',
  styleUrls: ['styles.css'],
  directives: [HeroDetailComponent]
})

export class HeroesComponent implements OnInit {
    public heroes;
    public title = 'Tour of Heroes';
    public selectedHero: Hero;

    constructor(private heroService: HeroService) {
    }

    public onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit() {
            this.getHeroes();
    }
}
