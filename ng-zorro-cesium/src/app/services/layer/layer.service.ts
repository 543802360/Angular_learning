import { Injectable } from "@angular/core";

import { ImageryProviders, LayerTreeNodes } from "./layers";
import { CesiumService } from "../cesium/cesium.service";

@Injectable()
export class LayerService {

  constructor() {
  }
  getLayerTreeNodes(): object[] {
    return LayerTreeNodes;
  }
  getImageryProviderByName(layerName: string) {
    return ImageryProviders[layerName];
  }
  getLayerByName(layerName: string) {

  }
}
