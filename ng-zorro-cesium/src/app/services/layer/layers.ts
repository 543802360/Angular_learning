const tdtImgProvider = new Cesium.WebMapTileServiceImageryProvider({
  url:
    "http://{s}.tianditu.com/img_w/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=img&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles",
  layer: "img",
  style: "default",
  format: "tiles",
  tileMatrixSetID: "w",
  credit: new Cesium.Credit("天地图影像"),
  subdomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
  minimumLevel: 0,
  maximumLevel: 19
});

const tdtVecProvider = new Cesium.WebMapTileServiceImageryProvider({
  url:
    "http://{s}.tianditu.com/vec_w/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=vec&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles",
  layer: "vec",
  style: "default",
  format: "tiles",
  tileMatrixSetID: "w",
  credit: new Cesium.Credit("天地图矢量"),
  subdomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
  minimumLevel: 0,
  maximumLevel: 20
});

const tdtTerProvider = new Cesium.WebMapTileServiceImageryProvider({
  url:
    "http://{s}.tianditu.com/ter_w/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=ter&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles",
  layer: "ter",
  style: "default",
  format: "tiles",
  tileMatrixSetID: "w",
  credit: new Cesium.Credit("天地图地形"),
  subdomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
  minimumLevel: 0,
  maximumLevel: 20
});

const tdtImgAnnoProvider = new Cesium.WebMapTileServiceImageryProvider({
  url:
    "http://{s}.tianditu.com/cia_w/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=cia&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles",
  layer: "cia",
  style: "default",
  format: "tiles",
  tileMatrixSetID: "w",
  credit: new Cesium.Credit("天地图影像注记"),
  subdomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
  minimumLevel: 0,
  maximumLevel: 20
});

const tdtVecAnnoProvider = new Cesium.WebMapTileServiceImageryProvider({
  url:
    "http://{s}.tianditu.com/cia_w/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=cia&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles",
  layer: "cia",
  style: "default",
  format: "tiles",
  tileMatrixSetID: "w",
  credit: new Cesium.Credit("天地图影像注记"),
  subdomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
  minimumLevel: 0,
  maximumLevel: 20
});

const tdtTerAnnoProvider = new Cesium.WebMapTileServiceImageryProvider({
  url:
    "http://{s}.tianditu.com/cia_w/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=cia&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles",
  layer: "cia",
  style: "default",
  format: "tiles",
  tileMatrixSetID: "w",
  credit: new Cesium.Credit("天地图影像注记"),
  subdomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
  minimumLevel: 0,
  maximumLevel: 20
});

const LayerTreeNodes = [
  {
    label: "天地图影像",
    expandedIcon: "fa-folder-open",
    collapsedIcon: "fa-folder",
    leaf: true
  },
  {
    label: "天地图矢量",
    expandedIcon: "fa-folder-open",
    collapsedIcon: "fa-folder",
    leaf: true
  },
  {
    label: "天地图地形",
    expandedIcon: "fa-folder-open",
    collapsedIcon: "fa-folder",
    leaf: true
  },
  {
    label: "注记图层",
    expandedIcon: "fa-folder-open",
    collapsedIcon: "fa-folder",
    children: [
      {
        label: "天地图影像注记",
        expandedIcon: "fa-folder-open",
        collapsedIcon: "fa-folder",
        leaf: true
      },
      {
        label: "天地图矢量注记",
        expandedIcon: "fa-folder-open",
        collapsedIcon: "fa-folder",
        leaf: true
      },
      {
        label: "天地图地形注记",
        expandedIcon: "fa-folder-open",
        collapsedIcon: "fa-folder",
        leaf: true
      }
    ]
  }
];
const ImageryProviders = {
  天地图影像: tdtImgProvider,
  天地图矢量: tdtVecProvider,
  天地图地形: tdtTerProvider,
  天地图影像注记: tdtImgAnnoProvider,
  天地图矢量注记: tdtImgAnnoProvider,
  天地图地形注记: tdtImgAnnoProvider
};

export { LayerTreeNodes, ImageryProviders };
