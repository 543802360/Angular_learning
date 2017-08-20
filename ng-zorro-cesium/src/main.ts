import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/components/app.module";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}
//build时不设置base_href
window["CESIUM_BASE_URL"] = "/assets/cesium";
//build时设置base_href属性
//window["CESIUM_BASE_URL"] = "/demo/ng-zorro-cesium/assets/cesium";

platformBrowserDynamic().bootstrapModule(AppModule);
