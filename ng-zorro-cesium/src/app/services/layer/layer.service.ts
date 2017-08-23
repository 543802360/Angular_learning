import { Injectable } from "@angular/core";

import {
  ImageryProviders,
  LayerTreeNodes,
  ImageryProviderVMS,
  terrainProviderVMS
} from "./layers";
import { CesiumService } from "../cesium/cesium.service";

@Injectable()
export class LayerService {
  constructor(private cesiumService: CesiumService) {}
  /**
   * 获取图层树初始化节点集
   *
   * @returns {object[]}
   * @memberof LayerService
   */
  getLayerTreeNodes(): object[] {
    return LayerTreeNodes;
  }

  getImageryProviders(): object {
    return ImageryProviders;
  }
  /**
   *
   *
   * @returns
   * @memberof LayerService
   */
  getImageryProviderVMS() {
    return ImageryProviderVMS;
  }

  getterrainProviderVMS() {
    return terrainProviderVMS;
  }
  /**
   *
   * 根据名称获取ImageryProvider
   * @param {string} layerName
   * @returns
   * @memberof LayerService
   */
  getImageryProviderByName(layerName: string) {
    return ImageryProviders[layerName];
  }

  /**
   *
   *
   * @param {string} layerName
   * @memberof LayerService
   */
  getImageryLayerByName(layerName: string) {
    let layer = null;
    this.cesiumService.getViewer().imageryLayers._layers.forEach(el => {
      if (el.imageryProvider.credit.text === layerName) {
        layer = el;
      }
    });
    return layer;
  }
}
