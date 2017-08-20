import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { AppComponent } from "./app.component";
import { LayoutComponent } from "./layout/layout.component";
import { ViewerComponent } from "./viewer/viewer.component";
import { CesiumViewerDirective } from "./viewer/cesium-viewer.directive";
import { ViewerFactoryService } from "../services/viewer-factory/viewer-factory.service";
import { CesiumService } from "../services/cesium/cesium.service";
import { ScenesettingComponent } from './scenesetting/scenesetting.component';
import { LayerTreeComponent } from './layer-tree/layer-tree.component';
//导入leaflet

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ViewerComponent,
    CesiumViewerDirective,
    ScenesettingComponent,
    LayerTreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot()
  ],
  providers: [ViewerFactoryService, CesiumService], //服务提供商
  bootstrap: [AppComponent]
})
export class AppModule {}
