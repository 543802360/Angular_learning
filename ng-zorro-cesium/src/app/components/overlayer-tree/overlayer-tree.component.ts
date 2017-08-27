import { Component, OnInit, AfterViewInit } from "@angular/core";
import { TreeNode } from "primeng/primeng";

import { LayerService } from "../../services/layer/layer.service";
import { CesiumService } from "../../services/cesium/cesium.service";

@Component({
  selector: 'qk-earth-overlayer-tree',
  template: `
  <p-tree [value]="treeNodes" selectionMode="checkbox"
   [(selection)]="selectedNodes"
   [propagateSelectionUp]="true"
   [propagateSelectionDown]="true"
   (onNodeSelect)="treeNodeSelect($event)"
   (onNodeUnselect)="treeNodeUnSelect($event)">
   </p-tree>
`,
  styleUrls: ['./overlayer-tree.component.css']
})
export class OverlayerTreeComponent implements  OnInit, AfterViewInit {
  public treeNodes: TreeNode[];
  public selectedNodes: TreeNode[];
  public viewer: any;
  constructor(
    private layerService: LayerService,
    private cesiumService: CesiumService
  ) {}

  /**
   *组件初始化声明周期钩子函数
   *
   * @memberof LayerTreeComponent
   */
  ngOnInit() {
    this.treeNodes = this.layerService.getLayerTreeNodes();
  }
  /**
   * 组件及其子组件初始化完成声明周期钩子函数
   *
   * @memberof LayerTreeComponent
   */
  ngAfterViewInit() {
    this.viewer = this.cesiumService.getViewer();
  }

  /**
   * 树节点选中事件处理函数
   *
   * @param {any} event
   * @memberof LayerTreeComponent
   */
  treeNodeSelect(event) {
    console.log(event);
    if (event.node.leaf) {
      //如果是根节点，直接加载
      this.viewer.imageryLayers.addImageryProvider(
        this.layerService.getImageryProviderByName(event.node.label)
      );
    } else {
      // 图层组节点，遍历该图层组下所有图层，然后加载
      event.node.children.forEach(node => {
        if (node.leaf) {
          this.viewer.imageryLayers.addImageryProvider(
            this.layerService.getImageryProviderByName(node.label)
          );
        }
      });
    }
  }
  /**
   * 树节点取消选中事件处理函数
   *
   * @param {any} event
   * @memberof LayerTreeComponent
   */
  treeNodeUnSelect(event) {
    console.log(event);
    if (event.node.leaf) {
      this.viewer.imageryLayers.remove(
        this.layerService.getImageryLayerByName(event.node.label)
      );
    } else {
      // 图层组节点，遍历该图层组下所有图层，然后移除
      event.node.children.forEach(node => {
        if (node.leaf) {
          this.viewer.imageryLayers.remove(
            this.layerService.getImageryLayerByName(node.label)
          );
        }
      });
    }
  }

  // getLayerByName(layerName: string) {
  //   let layer = null;
  //   this.viewer.imageryLayers._layers.forEach(el => {
  //     if (el.imageryProvider.credit.text === layerName) {
  //       layer = el;
  //     }
  //   });
  //   return layer;
  // }
}
