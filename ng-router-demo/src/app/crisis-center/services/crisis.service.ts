import { CRISIS } from "./mock-crises";
import { Crisis } from "../crisis";
import { Injectable } from "@angular/core";

@Injectable()
export class CrisisService {
  /**
   *
   * 返回所有英雄列表
   *
   * @returns {Promise<Hero[]>}
   * @memberof HeroService
   */
  getCrises(): Promise<Crisis[]> {
    return Promise.resolve(CRISIS);
  }
  getCrisis(id): Crisis {
    let selectCrisis: Crisis;

    CRISIS.forEach(crisis => {
      if (crisis.id == id) {
        selectCrisis = crisis;
      }
    });
    return selectCrisis;
  }
  constructor() {}
}
