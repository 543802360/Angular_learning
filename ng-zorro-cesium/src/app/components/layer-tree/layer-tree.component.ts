import {
  Component,
  OnInit,
  AfterViewInit,
  AfterViewChecked,
  AfterContentInit
} from "@angular/core";
import { TreeNode, MenuItem } from "primeng/primeng";

import { LayerService } from "../../services/layer/layer.service";
import { CesiumService } from "../../services/cesium/cesium.service";

@Component({
  selector: "qk-earth-layer-tree",
  template: `
     <p-tree [value]="treeNodes" selectionMode="checkbox"
      [(selection)]="selectedNodes"
      [contextMenu]="cm"
      [propagateSelectionUp]="true"
      [propagateSelectionDown]="true"
      (onNodeSelect)="treeNodeSelect($event)"
      (onNodeUnselect)="treeNodeUnSelect($event)">
      </p-tree>
      <p-contextMenu #cm [model]="items"></p-contextMenu>
  `,
  styleUrls: ["./layer-tree.component.css"]
})
export class LayerTreeComponent
  implements OnInit, AfterViewInit, AfterViewChecked, AfterContentInit {
  //tree
  public treeNodes: TreeNode[]; //场景树节点集
  public selectedNodes: TreeNode[];

  //menu
  public items: MenuItem[] = [
    { label: "图层置顶", icon: "fa-plus" },
    { label: "图层下移", icon: "fa-download" },
    { label: "图层上移", icon: "fa-refresh" },
    { label: "移除图层", icon: "fa-refresh" },

    {
      label: "设置图层样式",
      icon: "fa-refresh"
    }
  ];

  public viewer: any;
  public imageryLayers: any;
  constructor(
    private layerService: LayerService,
    private cesiumService: CesiumService
  ) {
    this.treeNodes = [];
    this.selectedNodes = [];
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  /**
   *组件初始化声明周期钩子函数
   *
   * @memberof LayerTreeComponent
   */
  ngAfterViewChecked() {}
  /**
   * 组件及其子组件初始化完成声明周期钩子函数
   *
   * @memberof LayerTreeComponent
   */
  ngAfterContentInit() {}
  ngAfterViewInit() {
    setTimeout(() => {
      this.viewer = this.cesiumService.getViewer();
      this.imageryLayers = this.viewer.imageryLayers;

      this.treeNodes = this.imageryLayers._layers.map(layer => {
        return {
          label: layer.imageryProvider.credit.text,
          expandedIcon: "fa-folder-open",
          collapsedIcon: "fa-folder",
          leaf: true,
          selectable: true
        };
      });
      this.selectedNodes = this.treeNodes;
      //注册图层监听事件
      this.imageryLayers.layerAdded.addEventListener(
        this.updateLayerTreeNodes,
        this
      );
      this.imageryLayers.layerMoved.addEventListener(
        this.updateLayerTreeNodes,
        this
      );
      this.imageryLayers.layerRemoved.addEventListener(
        this.updateLayerTreeNodes,
        this
      );
    });
  }
  updateLayerTreeNodes() {
    this.treeNodes = this.cesiumService
      .getViewer()
      .imageryLayers._layers.map(layer => {
        return {
          label: layer.imageryProvider.credit.text,
          expandedIcon: "fa-folder-open",
          collapsedIcon: "fa-folder",
          leaf: true,
          selectable: true
        };
      });
    this.selectedNodes = this.treeNodes;
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
