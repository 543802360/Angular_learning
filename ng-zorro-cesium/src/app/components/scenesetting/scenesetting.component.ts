import { CesiumService } from "../../services/cesium/cesium.service";
import {
  AfterViewInit,
  Component,
  OnInit,
  OnChanges,
  SimpleChanges
} from "@angular/core";
@Component({
  selector: "qk-earth-scenesetting",
  templateUrl: "./scenesetting.component.html",
  styleUrls: ["./scenesetting.component.css"]
})
export class ScenesettingComponent implements OnInit, OnChanges, AfterViewInit {
  public viewer: any;
  public sceneOptions = [
    { label: "大气", value: "atmosphere", checked: true },
    { label: "光照", value: "lighting", checked: false },
    { label: "雾", value: "fog", checked: true }
  ];

  constructor(private cesiumService: CesiumService) {}
  /**
   * 更新场景设置
   *
   * @param {any} sceneOptions -场景设置options
   * @memberof ScenesettingComponent
   */
  updateScene(sceneOptions) {
    sceneOptions.forEach(element => {
      switch (element.value) {
        case "atmosphere":
          this.viewer.scene.skyAtmosphere.show = element.checked;
          break;
        case "lighting":
          this.viewer.scene.globe.enableLighting = element.checked;
          break;
        case "fog":
          this.viewer.scene.fog.enabled = element.checked;
          break;
        default:
          break;
      }
    });
  }
  /**
   *
   * 组件初始化事件监听
   * @memberof ScenesettingComponent
   *
   */
  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {}

  ngAfterViewInit() {
    this.viewer = this.cesiumService.getViewer();
  }
}
