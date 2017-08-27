import { Component } from "@angular/core";
import { MyDirectiveDirective } from "./components/my-directive.directive";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  subTitle1 = "我是自定性属性型指令值";
}
