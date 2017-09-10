/**
 * crisis-center特性模块根组件
 * CrisisCenterComponent和AppComponent有下列共同点：
 * 它是危机中心特性区的根，正如AppComponent是整个应用的根
 * 它是危机管理特性区的壳，正如AppComponent是管理高层工作流的壳
 */

import { Component } from "@angular/core";

@Component({
  template: `<h2>危机中心</h2>
  <router-outlet></router-outlet>`
})
export class CrisisCenterComponent {}
