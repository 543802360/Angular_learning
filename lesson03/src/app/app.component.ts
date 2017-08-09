import { Component } from "@angular/core";
import { DemoFormSkuComponent } from "./demo-form-sku/demo-form-sku.component";
import { DemoFormBuilderComponent } from "./demo-form-builder/demo-form-builder.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Angular 2 表单1";
}
