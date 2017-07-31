import { Component } from "@angular/core";
import { InventoryAppComponent } from "./inventory-app/inventory-app.component";

@Component({
  selector: "app-root",
  //templateUrl: "./app.component.html",
  template: `
    <app-inventory-app></app-inventory-app>
  `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
}
