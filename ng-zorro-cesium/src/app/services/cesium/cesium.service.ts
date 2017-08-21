import { ViewerFactoryService } from "../viewer-factory/viewer-factory.service";
import { Injectable } from "@angular/core";

/**
 * Cesium服务类。初始化Cesium Viewer，暴露Cesium Viewer和Scene接口
 *
 * @export
 * @class CesiumService
 */
@Injectable()
export class CesiumService {
  private cesiumViewer: any;
  constructor(private viewerFactory: ViewerFactoryService) {}

  /**
   *
   * @param container
   * @param options
   */
  init(container: HTMLElement, options?: Object) {
    if (options) {
      this.cesiumViewer = this.viewerFactory.createViewer(container, options);
    } else {
      //默认参数
    }
  }

  getViewer() {
    return this.cesiumViewer;
  }
}
