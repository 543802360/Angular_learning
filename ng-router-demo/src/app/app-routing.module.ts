/**
 * 路由模块
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RouterModule, Routes } from "@angular/router";

import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { ComposeMessageComponent } from "./components/compose-message/compose-message.component";

const appRoutes: Routes = [
  {
    path: "compose",
    component: ComposeMessageComponent,
    outlet:'popup'
  },
  {
    path: "",
    redirectTo: "/heroes",
    pathMatch: "full"
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {
      enableTracing: true //<--调试用，跟踪路由事件
    })
  ],

  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
