import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
//导入路由模块
import { RouterModule, Routes } from "@angular/router";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
//导入组件
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";

/**
 * 路由配置
 */
const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "contactus",
    redirectTo: "contact"
  }
];

@NgModule({
  //组件声明
  declarations: [AppComponent, HomeComponent, AboutComponent, ContactComponent],
  //导入依赖
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) //安装路由
  ],
  //依赖注入。暂时不懂
  //这个选项是一个数组,需要我们列出我们这个模块的一些需要共用的服务
  //然后我们就可以在这个模块的各个组件中通过依赖注入使用了.
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
