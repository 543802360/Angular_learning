import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <h1>Angular路由器</h1>
    <nav>
      <a [routerLink]="['crisis-center']" routerLinkActive="active">危机中心</a>
      <a routerLink="/heroes" routerLinkActive="active">英雄</a>
      <a [routerLink]="[{ outlets: { popup: ['compose'] } }]">Contact</a>
    </nav>
    <router-outlet></router-outlet>
    <router-outlet name="popup"></router-outlet>
  `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
}
