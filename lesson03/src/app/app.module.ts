import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { DemoFormSkuComponent } from "./demo-form-sku/demo-form-sku.component";
//导入表单依赖模块
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [AppComponent, DemoFormSkuComponent],//组件声明
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],//模块依赖
  providers: [],
  bootstrap: [AppComponent] //主引导模块
})
export class AppModule {}
