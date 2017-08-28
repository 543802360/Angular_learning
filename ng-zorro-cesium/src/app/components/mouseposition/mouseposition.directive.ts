import {
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
  AfterViewInit
} from "@angular/core";
import { CesiumService } from "../../services/cesium/cesium.service";
@Directive({
  selector: "[qkEarthMouseposition]"
})
export class MousepositionDirective implements OnInit, AfterViewInit {
  viewer: any = null;
  constructor(
    private _el: ElementRef,
    private _render: Renderer2,
    private _cesiumService: CesiumService
  ) {}

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.init();
  }

  init() {
    this.viewer = this._cesiumService.getViewer();
    let mousePositionDiv: HTMLElement = this._el.nativeElement;
    this._render.appendChild(
      document.getElementsByClassName("cesium-viewer")[0],
      mousePositionDiv
    );
    let that = this;
    // 得到当前三维场景
    let scene: any = this.viewer.scene;
    // 得到当前三维场景的椭球体
    let ellipsoid: any = scene.globe.ellipsoid;
    let lon: number = null;
    let lat: number = null;
    let height: number = null;
    let elevation: number = null;
    let cartesian: any = null;
    // 定义当前场景的画布元素的事件处理
    let handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
    // 设置鼠标移动事件的处理函数，这里负责监听x,y坐标值变化
    handler.setInputAction(function(movement) {
      // 通过指定的椭球或者地图对应的坐标系，将鼠标的二维坐标转换为对应椭球体三维坐标
      cartesian = that.viewer.camera.pickEllipsoid(
        movement.endPosition,
        ellipsoid
      );
      if (cartesian) {
        // 将笛卡尔坐标转换为地理坐标
        let cartographic = ellipsoid.cartesianToCartographic(cartesian);
        // 将弧度转为度的十进制度表示
        lon = Cesium.Math.toDegrees(cartographic.longitude).toFixed(3);
        lat = Cesium.Math.toDegrees(cartographic.latitude).toFixed(3);
        // 获取相机高度
        height = Math.ceil(that.viewer.camera.positionCartographic.height);
        // 查询高程值与视点高度
        let positions = [Cesium.Cartographic.fromDegrees(lon, lat)];
        var promise = Cesium.sampleTerrain(
          that.viewer.terrainProvider,
          11,
          positions
        );
        Cesium.when(promise, function(updatedPositions) {
          elevation = updatedPositions[0].height;
          let innerhtml = `纬度：${lat}&nbsp;,&nbsp;经度：${lon}&nbsp;,&nbsp;海拔高度：${elevation}米`;
          that._render.setProperty(mousePositionDiv, "innerHTML", innerhtml);
          //that._el.nativeElement.innerHTML = innerhtml;
        });
      }
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
    // 设置鼠标滚动事件的处理函数，这里负责监听高度值变化
    handler.setInputAction(function(wheelment) {
      height = Math.ceil(that.viewer.camera.positionCartographic.height);
      //  查询高程值与视点高度
      let positions = [Cesium.Cartographic.fromDegrees(lon, lat)];
      let promise = Cesium.sampleTerrain(
        that.viewer.terrainProvider,
        11,
        positions
      );
      Cesium.when(promise, function(updatedPositions) {
        elevation = updatedPositions[0].height;
        let innerhtml = `纬度：${lat}&nbsp;,&nbsp;经度：${lon}&nbsp;,&nbsp;海拔高度：${elevation}米`;
        that._render.setProperty(mousePositionDiv, "innerHTML", innerhtml);
      });
    }, Cesium.ScreenSpaceEventType.WHEEL);
  }
}
