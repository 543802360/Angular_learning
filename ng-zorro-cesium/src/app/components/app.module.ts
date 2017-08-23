import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { APP_BASE_HREF } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { TreeModule } from "primeng/primeng";
import { AppComponent } from "./app.component";
import { LayoutComponent } from "./layout/layout.component";
import { ViewerComponent } from "./viewer/viewer.component";
import { CesiumViewerDirective } from "./viewer/cesium-viewer.directive";
import { ViewerFactoryService } from "../services/viewer-factory/viewer-factory.service";
import { CesiumService } from "../services/cesium/cesium.service";
import { LayerService } from "../services/layer/layer.service";
import { ScenesettingComponent } from "./scenesetting/scenesetting.component";
import { LayerTreeComponent } from "./layer-tree/layer-tree.component";
import { OverlayerTreeComponent } from './overlayer-tree/overlayer-tree.component';
import { DrawComponent } from './draw/draw.component';
import { MeasureComponent } from './measure/measure.component';
import { HelpComponent } from './help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ViewerComponent,
    CesiumViewerDirective,
    ScenesettingComponent,
    LayerTreeComponent,
    OverlayerTreeComponent,
    DrawComponent,
    MeasureComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TreeModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot()
  ],
  providers: [
    //依赖提供商
    ViewerFactoryService,
    CesiumService,
    {
      provide: LayerService,
      useClass: LayerService
    }
    // ,
    // {
    //   provide: APP_BASE_HREF,
    //   useValue: '/demo/ng-zorro-cesium'
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
