import {
  Component,
  OnInit,
  AfterViewInit,
  AfterViewChecked,
  AfterContentInit,
  ElementRef,
  ViewChild
} from "@angular/core";
import { TreeNode, MenuItem } from "primeng/primeng";

import { LayerService } from "../../services/layer/layer.service";
import { CesiumService } from "../../services/cesium/cesium.service";

@Component({
  selector: "qk-earth-layer-tree",
  templateUrl: "./layer-tree.component.html",
  styleUrls: ["./layer-tree.component.css"]
})
export class LayerTreeComponent
  implements OnInit, AfterViewInit, AfterViewChecked, AfterContentInit {
  //tree
  treeNodes: TreeNode[]; //场景树节点集
  selectedNodes: TreeNode[];

  //menu
  items: MenuItem[];
  // cesium related
  viewer: any;
  imageryLayers: any;
  //
  isVisible: boolean = false;
  subtitle: string = "图层属性设置";
  selectedImageryLayer: any;
  alphaValue: number = 1.0; //透明度
  brightnessValue: number = 1.0; //亮度
  contrastValue: number = 1.0; //对比度
  gammaValue: number = 1.0; //灰度
  saturationValue: number = 1.0; //饱和度

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
    //
    setTimeout(() => {
      this.viewer = this.cesiumService.getViewer();
      this.imageryLayers = this.viewer.imageryLayers;
      // 获取当前viewer中所有ImageryLayer
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
      //初始化弹出菜单
      this.items = [
        { label: "图层置顶", icon: "fa-plus" },
        { label: "图层下移", icon: "fa-download" },
        { label: "图层上移", icon: "fa-refresh" },
        { label: "移除图层", icon: "fa-refresh" },

        {
          label: "设置图层样式",
          icon: "fa-refresh",
          command: event => {
            //console.log(event);
            this.isVisible = true;
          }
        }
      ];
      //
    });
  }

  handleCancel(e) {
    this.isVisible = false;
  }
  handleOk(e) {
    this.isVisible = false;
  }

  onAlphaChange(alpha: number) {
    this.selectedImageryLayer.alpha = this.alphaValue;
  }
  onBrightnessChange(brightness: number) {
    this.selectedImageryLayer.brightness = this.brightnessValue;
  }
  onGammaChange(gamma: number) {
    this.selectedImageryLayer.gamma = this.gammaValue;
  }
  onSaturationChange(saturation: number) {
    this.selectedImageryLayer.saturation = this.saturationValue;
  }
  onContrastChange(contrast: number) {
    this.selectedImageryLayer.contrast = this.contrastValue;
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
  treeNodeContextMenuSelect(event) {
    console.log(event);
    let imageryLayerName = event.node.label;
    this.selectedImageryLayer = this.layerService.getImageryLayerByName(
      imageryLayerName
    );
  }

  /**
   * 更新图层树节点集合
   */
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
}
