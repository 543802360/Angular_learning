import { Component, OnInit } from "@angular/core";
import { LayerService } from "../../services/layer/layer.service";
@Component({
  selector: "qk-earth-viewer",
  templateUrl: "./viewer.component.html",
  styleUrls: ["./viewer.component.css"]
})
export class ViewerComponent implements OnInit {
  public imageryProviders: any;
  public options = null;

  /**
   * 构造函数
   * 注入layerService
   * @param {LayerService} layerService
   * @memberof ViewerComponent
   */
  constructor(private layerService: LayerService) {}

  //组件初始化时要干的事情
  ngOnInit() {
    this.options = {
      animation: false,
      baseLayerPicker: true,
      fullscreenButton: true,
      geocoder: true,
      homeButton: true,
      imageryProviderViewModels: this.layerService.getImageryProviderVMS(),
      terrainProviderViewModels: this.layerService.getterrainProviderVMS(),
      infoBox: true,
      mapProjection: new Cesium.GeographicProjection(),
      navigationHelpButton: true,
      sceneModePicker: false,
      selectionIndicator: true,
      scene3DOnly: true,
      timeline: false,
      // terrainProvider: new Cesium.CesiumTerrainProvider({
      //   //url: 'http://127.0.0.1:10086/terrain/',
      //   url: "http://web.earthg.cn/dem",
      //   //url: 'https://assets.agi.com/stk-terrain/world/',
      //   //url: 'http://assets.agi.com/stk-terrain/v1/tilesets/ArticDEM/tiles',
      //   requestVertexNormals: false,
      //   requestWaterMask: false
      // }),
      // imageryProvider: new Cesium.WebMapTileServiceImageryProvider({
      //   url:
      //     "http://{s}.tianditu.com/img_w/wmts?service=WMTS&version=1.0.0&request=GetTile&ti" +
      //     "lematrix={TileMatrix}&layer=img&style={style}&tilerow={TileRow}&tilecol={TileCol" +
      //     "}&tilematrixset={TileMatrixSet}&format=tiles",
      //   layer: "img",
      //   style: "default",
      //   format: "tiles",
      //   tileMatrixSetID: "w",
      //   credit: new Cesium.Credit("天地图影像"),
      //   subdomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
      //   minimumLevel: 0,
      //   maximumLevel: 19
      // }),
      vrButton: true
    };
  }

  createImageryViewModels() {}
}
