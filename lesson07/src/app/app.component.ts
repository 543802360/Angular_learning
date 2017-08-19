import { Component } from "@angular/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  fontSizePx: number;
  constructor() {
    this.fontSizePx = 20;
  }
}
