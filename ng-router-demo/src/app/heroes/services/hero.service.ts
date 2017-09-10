import { HEROES } from "./mock-heroes";
import { Hero } from "../hero";
import { Injectable } from "@angular/core";

@Injectable()
export class HeroService {
  /**
   *
   * 返回所有英雄列表
   *
   * @returns {Promise<Hero[]>}
   * @memberof HeroService
   */
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
  getHero(id): Hero {
    let selectHero: Hero;

    HEROES.forEach(hero => {
      if (hero.id == id) {
        selectHero = hero;
      }
    });
    return selectHero;
  }
  constructor() {}
}
