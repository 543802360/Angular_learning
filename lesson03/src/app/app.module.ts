import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { DemoFormSkuComponent } from "./demo-form-sku/demo-form-sku.component";
//导入表单依赖模块
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { DemoFormBuilderComponent } from './demo-form-builder/demo-form-builder.component';
@NgModule({
  declarations: [AppComponent, DemoFormSkuComponent, DemoFormBuilderComponent], //组件声明
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ], //模块依赖
  providers: [],
  bootstrap: [AppComponent] //主引导模块
})
export class AppModule {}
