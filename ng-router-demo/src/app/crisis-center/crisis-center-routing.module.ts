import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//导入路由模块
import { RouterModule, Routes } from "@angular/router";
import { CrisisCenterComponent } from "../crisis-center/crisis-center.component";
import { CrisisCenterHomeComponent } from "./crisis-center-home/crisis-center-home.component";
import { CrisisListComponent } from "./crisis-list/crisis-list.component";
import { CrisisDetailComponent } from "./crisis-detail/crisis-detail.component";

//声明路由配置
const crisisCenterRoutes: Routes = [
  {
    path: "crisis-center",
    component: CrisisCenterComponent,
    children: [
      {
        path: "",
        component: CrisisListComponent,
        children: [
          {
            path: ":id",
            component: CrisisDetailComponent
          },
          {
            path: "",
            component: CrisisCenterHomeComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(crisisCenterRoutes)],
  declarations: [],
  exports: [RouterModule] //重新导出Angular路由模块
})
export class CrisisCenterRoutingModule {}
