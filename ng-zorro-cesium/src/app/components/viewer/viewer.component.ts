import { Component, OnInit } from "@angular/core";

@Component({
  selector: "qk-earth-viewer",
  templateUrl: "./viewer.component.html",
  styleUrls: ["./viewer.component.css"]
})
export class ViewerComponent implements OnInit {
  constructor() {}

  public options = {
    animation: false,
    baseLayerPicker: false,
    fullscreenButton: true,
    vrButton: true,
    geocoder: true,
    homeButton: true,
    infoBox: true,
    sceneModePicker: false,
    selectionIndicator: true,
    timeline: false,
    navigationHelpButton: true,
    scene3DOnly: true,
    mapProjection: new Cesium.GeographicProjection(),
    imageryProvider: new Cesium.WebMapTileServiceImageryProvider({
      url:
        "http://{s}.tianditu.com/img_w/wmts?service=WMTS&version=1.0.0&request=GetTile&ti" +
        "lematrix={TileMatrix}&layer=img&style={style}&tilerow={TileRow}&tilecol={TileCol" +
        "}&tilematrixset={TileMatrixSet}&format=tiles",
      layer: "img",
      style: "default",
      format: "tiles",
      tileMatrixSetID: "w",
      credit: new Cesium.Credit("天地图影像"),
      subdomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
      minimumLevel: 0,
      maximumLevel: 19
    })
  };
  //组件初始化时要干的事情
  ngOnInit() {}
}
