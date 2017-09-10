import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

//导入组件
import { HeroListComponent } from "./hero-list/hero-list.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
//导入服务
import { HeroService } from "./services/hero.service";

//导入该模块的路由模块
import { HeroesRoutingModule } from "./heroes-routing.module";
@NgModule({
  imports: [CommonModule, FormsModule, HeroesRoutingModule],
  declarations: [HeroDetailComponent, HeroListComponent],
  providers: [HeroService] //服务提供商
})
export class HeroesModule {}
