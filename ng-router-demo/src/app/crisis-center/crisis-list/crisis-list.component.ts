import { Component, OnInit } from "@angular/core";

import { Crisis } from "../crisis";
import { CrisisService } from "../services/crisis.service";

import { Router, ActivatedRoute, ParamMap } from "@angular/router";

import "rxjs/add/operator/switchMap";
import { Observable } from "rxjs/Observable";

@Component({
  template: `
    <ul class="heroes">
      <li *ngFor="let hero of crises |async"
        [class.selected]="isSelected(hero)"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <br>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
    .selected {
      background-color: red !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 30em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `
  ],
  providers: [CrisisService] //服务提供商，仅供该组件可用
})
export class CrisisListComponent implements OnInit {
  crises: Observable<Crisis[]>;
  selectedCrisis: Crisis;
  private selectedId: number;

  constructor(
    private router: Router,
    private crisisService: CrisisService,
    private route: ActivatedRoute
  ) {}

  getHeroes(): void {
    //this.heroService.getHeroes().then(heroes => (this.heroes = heroes));
    this.crises = this.route.paramMap.switchMap((params: ParamMap) => {
      // (+) before `params.get()` turns the string into a number
      this.selectedId = +params.get("id");
      return this.crisisService.getCrises();
    });
  }

  isSelected(hero: Crisis) {
    return hero.id === this.selectedId;
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(crisis: Crisis): void {
    this.selectedCrisis = crisis;
    //使用一个链接参数数组调用路由器的navigate方法。
    this.router.navigate([crisis.id], { relativeTo: this.route });
  }
}
