import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//导入路由模块
import { RouterModule, Routes } from "@angular/router";

import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { HeroListComponent } from "./hero-list/hero-list.component";

//声明路由配置
const heroesRoutes: Routes = [
  {
    path: "heroes",
    component: HeroListComponent
  },
  {
    path: "hero/:id",
    component: HeroDetailComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(heroesRoutes)],
  declarations: [],
  exports: [RouterModule] //重新导出Angular路由模块
})
export class HeroesRoutingModule {}
