import { Component, OnInit, AfterViewInit } from "@angular/core";
import { TreeNode } from "primeng/primeng";

import { LayerService } from "../../services/layer/layer.service";
import { CesiumService } from "../../services/cesium/cesium.service";

@Component({
  selector: "qk-earth-layer-tree",
  template: `
     <p-tree [value]="treeNodes" selectionMode="checkbox"
      [(selection)]="selectedNodes"
      [propagateSelectionUp]="false"
      [propagateSelectionDown]="false"
      (onNodeSelect)="treeNodeSelect($event)"
      (onNodeUnselect)="treeNodeUnSelect($event)">
      </p-tree>
  `,
  styleUrls: ["./layer-tree.component.css"]
})
export class LayerTreeComponent implements OnInit, AfterViewInit {
  public treeNodes: TreeNode[];
  public selectedNodes: TreeNode[];
  public viewer: any;
  constructor(
    private layerService: LayerService,
    private cesiumService: CesiumService
  ) {}

  ngOnInit() {
    this.treeNodes = this.layerService.getLayerTreeNodes();
  }
  ngAfterViewInit() {
    this.viewer = this.cesiumService.getViewer();
  }

  treeNodeSelect(event) {
    console.log(event);
    this.viewer.imageryLayers.addImageryProvider(
      this.layerService.getImageryProviderByName(event.node.label)
    );
  }
  treeNodeUnSelect(event) {
    console.log(event);
    this.viewer.imageryLayers.remove(this.getLayerByName(event.node.label));
  }

  getLayerByName(layerName: string) {
    let layer = null;
    this.viewer.imageryLayers._layers.forEach(el => {
      if (el.imageryProvider.credit.text === layerName) {
        layer = el;
      }
    });
    return layer;
  }
}
