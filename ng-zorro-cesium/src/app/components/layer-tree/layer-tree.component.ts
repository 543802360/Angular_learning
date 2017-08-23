import { Component, OnInit, AfterViewInit } from "@angular/core";
import { TreeNode } from "primeng/primeng";

import { LayerService } from "../../services/layer/layer.service";
import { CesiumService } from "../../services/cesium/cesium.service";

@Component({
  selector: "qk-earth-layer-tree",
  template: `
     <p-tree [value]="treeNodes" selectionMode="checkbox"
      [(selection)]="selectedNodes"
      [propagateSelectionUp]="true"
      [propagateSelectionDown]="true"
      (onNodeSelect)="treeNodeSelect($event)"
      (onNodeUnselect)="treeNodeUnSelect($event)">
      </p-tree>
  `,
  styleUrls: ["./layer-tree.component.css"]
})
export class LayerTreeComponent implements OnInit, AfterViewInit {
  public treeNodes: TreeNode[]; //场景树节点集
  public selectedNodes: TreeNode[];
  public viewer: any;
  public imageryLayers: any;
  constructor(
    private layerService: LayerService,
    private cesiumService: CesiumService
  ) {
    this.treeNodes = [];
  }

  /**
   *组件初始化声明周期钩子函数
   *
   * @memberof LayerTreeComponent
   */
  ngOnInit() {}
  /**
   * 组件及其子组件初始化完成声明周期钩子函数
   *
   * @memberof LayerTreeComponent
   */
  ngAfterViewInit() {
    this.viewer = this.cesiumService.getViewer();
    this.imageryLayers = this.viewer.imageryLayers;
    //注册图层监听事件
    this.imageryLayers.layerAdded.addEventListener(
      this.layerAddedEventListener
    );
    this.imageryLayers.layerMoved.addEventListener(
      this.layerMovedEventListener
    );
    this.imageryLayers.layerRemoved.addEventListener(
      this.layerRemovedEventListener
    );

    this.treeNodes = this.imageryLayers._layers.map(layer => {
      return {
        label: layer.imageryProvider.credit.text,
        expandedIcon: "fa-folder-open",
        collapsedIcon: "fa-folder",
        leaf: true,
        selectable: true
      };
    });
  }

  layerAddedEventListener() {}

  layerMovedEventListener() {}
  layerRemovedEventListener() {}
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
      this.layerService.getImageryLayerByName(event.node.label).show = true;
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
      //如果是根节点，直接加载
      this.layerService.getImageryLayerByName(event.node.label).show = false;
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
