import { Injectable } from "@angular/core";

@Injectable()
export class ViewerFactoryService {
  private cesium: any;
  constructor() {
    this.cesium = Cesium;
    this.cesium.Camera.DEFAULT_VIEW_RECTANGLE = new this.cesium.Rectangle
      .fromDegrees(75.0, -30.0, 130.0, 90.0);
    this.cesium.Camera.DEFAULT_VIEW_FACTOR = 0;
  }
  /**
   *
   * 创建一个Cesium Viewer
   *
   * @param {HTMLElement} container - Cesium Viewer容器，必选参数
   * @param {*} [options] - Viewer配置项，可选参数
   * @returns
   * @memberof ViewerFactoryService
   */
  createViewer(container: HTMLElement, options?: any) {
    let viewer = null;
    if (options) {
      viewer = new this.cesium.Viewer(container, options);
      viewer.extend(Cesium.viewerCesiumNavigationMixin, {});
    } else {
      //默认参数
    }
    return viewer;
  }
}
