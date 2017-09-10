import { Component, HostBinding, OnInit, AfterViewInit } from "@angular/core";

import { Router, ActivatedRoute, ParamMap } from "@angular/router";
//switchMap操作符，处理路由参数的可观察者对象 Observable
import "rxjs/add/operator/switchMap";
import { Hero } from "../hero";
import { HeroService } from "../services/hero.service";

//导入动画
import { slideInDownAnimation } from "../../animations";

@Component({
  animations: [slideInDownAnimation],
  template: `
    <h3>你选择的英雄id是：{{hero.id}}</h3>
    <h3>你选择的英雄名称是：{{hero.name}}</h3>
    <button (click)="goHeroes()">返回英雄列表</button>`,
  styleUrls: ["./hero-detail.component.css"]
})
export class HeroDetailComponent implements OnInit, AfterViewInit {
  hero: Hero;
  //依赖注入
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private heroService: HeroService
  ) {}

  ngOnInit() {
    //获取路由路径、参数；解析路由器
    // this.route.paramMap
    //   .switchMap((params: ParamMap) =>
    //     this.heroService.getHero(params.get("id")))
    //   .subscribe((hero: Hero) => (this.hero = hero));

    this.route.url.subscribe(url => {
      console.log("route url:", url);
    });
    this.route.paramMap.subscribe(params => {
      console.log("Route paramMap:", params);
    });
    this.route.params.subscribe(params => {
      console.log("route params:", params);
    });

    console.log("routeConfig:", this.route.routeConfig);
    console.log("parent:", this.route.parent);

    //获取指定id的英雄
    this.route.paramMap.subscribe(params => {
      this.hero = this.heroService.getHero(params.get("id"));
    });
  }

  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.route.url.subscribe(url => {
      console.log("route url:", url);
    });
    this.route.paramMap.subscribe(params => {
      console.log("Route paramMap:", params);
    });
    this.route.params.subscribe(params => {
      console.log("route params:", params);
    });

    console.log("routeConfig:", this.route.routeConfig);
    console.log("parent:", this.route.parent);

    //获取指定id的英雄
    this.route.paramMap.subscribe(params => {
      this.hero = this.heroService.getHero(params.get("id"));
    });
  }

  goHeroes() {
    let heroId = this.hero ? this.hero.id : null;

    this.router.navigate(["heroes", { id: heroId, foo: "foo" }]);
  }

  @HostBinding("@routeAnimation") routeAnimation = true;
  @HostBinding("style.display") display = "block";
  @HostBinding("style.position") position = "absolute";
}
