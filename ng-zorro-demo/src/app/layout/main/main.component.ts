import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  isCollapsed = false;

  constructor() {}

  //组件初始化时要干的事情
  ngOnInit() {
    this.initMap();
  }

  initViewer() {
    Cesium.Camera.DEFAULT_VIEW_RECTANGLE = new Cesium.Rectangle.fromDegrees(
      75.0,
      -30.0,
      130.0,
      90.0
    );
    Cesium.Camera.DEFAULT_VIEW_FACTOR = 0;

    console.log("Cesium", Cesium);
    var Viewer = new Cesium.Viewer("map", {
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
    });
  }

  //初始化leaflet
  initMap() {
    var map = L.map("map").setView([35.5, 110.5], 4);

    L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: false,
      maxZoom: 18
    }).addTo(map);
  }
}
