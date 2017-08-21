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
    "http://{s}.tianditu.com/cva_w/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=cva&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles",
  layer: "cva",
  style: "default",
  format: "tiles",
  tileMatrixSetID: "w",
  credit: new Cesium.Credit("天地图矢量注记"),
  subdomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
  minimumLevel: 0,
  maximumLevel: 20
});

const tdtTerAnnoProvider = new Cesium.WebMapTileServiceImageryProvider({
  url:
    "http://{s}.tianditu.com/cta_w/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=cta&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles",
  layer: "cta",
  style: "default",
  format: "tiles",
  tileMatrixSetID: "w",
  credit: new Cesium.Credit("天地图地形注记"),
  subdomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
  minimumLevel: 0,
  maximumLevel: 20
});

const googleImgProvider = new Cesium.UrlTemplateImageryProvider({
  //url: 'http://127.0.0.1:10086/getImage/{z}/{x}/{y}',
  url: "http://www.google.cn/maps/vt?lyrs=s@198&gl=en&x={x}&y={y}&z={z}",
  //url: 'http://mt2.google.cn/maps/vt?lyrs=y&hl=zh-CN&gl=CN&&x={x}&y={y}&z={x}',
  tilingScheme: new Cesium.WebMercatorTilingScheme(),
  credit: "谷歌影像",
  minimumLevel: 2,
  maximumLevel: 22
});

const LayerTreeNodes = [
  {
    label: "谷歌影像",
    expandedIcon: "fa-folder-open",
    collapsedIcon: "fa-folder",
    leaf: true
  },
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
  谷歌影像: googleImgProvider,
  天地图影像: tdtImgProvider,
  天地图矢量: tdtVecProvider,
  天地图地形: tdtTerProvider,
  天地图影像注记: tdtImgAnnoProvider,
  天地图矢量注记: tdtVecAnnoProvider,
  天地图地形注记: tdtTerAnnoProvider
};

/**
 *
 */

const tdtImgPVM = new Cesium.ProviderViewModel({
  name: "天地图影像",
  iconUrl: "../../../assets/images/tdtImg.png",
  tooltip: "天地图影像",
  creationFunction: function() {
    return tdtImgProvider;
  }
});

const tdtVecPVM = new Cesium.ProviderViewModel({
  name: "天地图矢量",
  iconUrl: "../../../assets/images/tdtVec.png",
  tooltip: "天地图矢量",
  creationFunction: function() {
    return tdtVecProvider;
  }
});

const tdtTerPVM = new Cesium.ProviderViewModel({
  name: "天地图地形",
  iconUrl: "../../../assets/images/tdtTer.png",
  tooltip: "天地图地形",
  creationFunction: function() {
    return tdtTerProvider;
  }
});
const googleImgPVM = new Cesium.ProviderViewModel({
  name: "谷歌影像",
  iconUrl: "../../../assets/images/googleImg.png",
  tooltip: "谷歌影像",
  creationFunction: function() {
    return googleImgProvider;
  }
});
const ImageryProviderVMS = [googleImgPVM, tdtImgPVM, tdtVecPVM, tdtTerPVM];
const terrainProviderPVM = new Cesium.ProviderViewModel({
  name: "地形",
  tooltip: "地形",
  iconUrl: "../../../assets/images/googleImg.png",
  creationFunction: function() {
    return new Cesium.CesiumTerrainProvider({
      url: "http://web.earthg.cn/dem"
    });
  }
});
const terrainProviderVMS = [terrainProviderPVM];
export {
  LayerTreeNodes,
  ImageryProviders,
  ImageryProviderVMS,
  terrainProviderVMS
};
